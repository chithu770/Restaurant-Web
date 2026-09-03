import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Fix for default Leaflet marker icon in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

const LocationMarker = ({ setAddress, position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      // Reverse geocode using Nominatim API (free)
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
        .then(res => res.json())
        .then(data => {
          if(data && data.address) {
            setAddress(prev => ({
              ...prev,
              street: data.address.road || data.address.suburb || data.address.neighbourhood || '',
              city: data.address.city || data.address.town || data.address.village || data.address.county || '',
              state: data.address.state || '',
              zip: data.address.postcode || ''
            }));
          }
        })
        .catch(err => console.error("Geocoding failed", err));
    }
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};

const Checkout = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    street: '', city: '', state: '', zip: ''
  });
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) navigate('/login');
    if (cartItems.length === 0) navigate('/cart');
  }, [user, cartItems, navigate]);

  // Request user's current location to center map initially
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setPosition({ lat: 28.6139, lng: 77.2090 }) // fallback to New Delhi
      );
    } else {
      setPosition({ lat: 28.6139, lng: 77.2090 });
    }
  }, []);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const orderData = {
      items: cartItems.map(item => ({
        menuItemId: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount: getCartTotal() * 1.08,
      deliveryAddress: address
    };

    try {
      const response = await fetch('/api/orders/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });
      
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || 'Failed to place order');
      
      // Initialize Razorpay
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Spice Table",
        description: "Food Order Payment",
        handler: async function (response) {
          try {
            const verifyRes = await fetch('/api/orders/verify-razorpay', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id || 'mock',
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature || 'mock',
                orderId: data.orderId
              })
            });
            const verifyData = await verifyRes.json();
            if(verifyData.success) {
              // Redirect to success which will clear cart
              navigate('/checkout-success?session_id=' + response.razorpay_payment_id);
            } else {
              navigate('/checkout-cancel');
            }
          } catch (err) {
            console.error("Verification error", err);
            navigate('/checkout-cancel');
          }
        },
        prefill: {
          name: user?.name || '',
          email: user?.email || '',
          contact: user?.phone || ''
        },
        theme: {
          color: "#b0212e"
        }
      };

      if (data.razorpayOrderId) {
        options.order_id = data.razorpayOrderId;
      }

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response){
        navigate('/checkout-cancel');
      });
      rzp.open();
      setLoading(false);

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-6">
            
            {/* Map Integration */}
            <div className="bg-white rounded-xl shadow-sm p-6 z-0">
              <h2 className="text-xl font-bold mb-4">Select Delivery Location on Map</h2>
              <p className="text-sm text-gray-500 mb-2">Click on the map to set your delivery pin. The address form below will auto-fill.</p>
              <div className="w-full h-64 bg-gray-200 rounded-lg relative overflow-hidden z-0">
                {position && (
                  <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%', zIndex: 0 }}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker setAddress={setAddress} position={position} setPosition={setPosition} />
                  </MapContainer>
                )}
              </div>
            </div>

            {/* Address Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
              {error && <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">{error}</div>}
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Street Address</label>
                  <input type="text" required value={address.street} onChange={e => setAddress({...address, street: e.target.value})} className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#b0212e] focus:border-[#b0212e]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" required value={address.city} onChange={e => setAddress({...address, city: e.target.value})} className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#b0212e] focus:border-[#b0212e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input type="text" required value={address.state} onChange={e => setAddress({...address, state: e.target.value})} className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#b0212e] focus:border-[#b0212e]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input type="text" required value={address.zip} onChange={e => setAddress({...address, zip: e.target.value})} className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#b0212e] focus:border-[#b0212e]" />
                </div>
              </form>
            </div>
            
            {/* Payment Display */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="border border-[#b0212e] rounded-lg p-4 bg-red-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="fa-regular fa-credit-card text-[#b0212e] text-xl"></i>
                  <span className="font-bold text-gray-800">Razorpay (Cards, UPI, NetBanking)</span>
                </div>
                <i className="fa-solid fa-circle-check text-[#b0212e]"></i>
              </div>
            </div>

          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">Order Summary</h2>
              <ul className="mb-4 space-y-2">
                {cartItems.map(item => (
                  <li key={item._id} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 text-gray-600 mb-4 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-3 text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                form="checkout-form"
                disabled={loading || !position}
                className="w-full bg-[#b0212e] text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-black transition disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Pay with Razorpay'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
