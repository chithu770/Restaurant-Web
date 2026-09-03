import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <i className="fa-solid fa-cart-shopping text-6xl text-gray-300 mb-6"></i>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/menu" className="bg-[#b0212e] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-black transition">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 bg-white rounded-xl shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item._id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  {item.imageURL ? (
                    <img src={item.imageURL} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  ) : (
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-utensils text-gray-400 text-2xl"></i>
                    </div>
                  )}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <p className="text-[#b0212e] font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                      <span className="px-3 font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">Order Summary</h2>
              <div className="space-y-3 text-gray-600 mb-4">
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
                onClick={() => {
                  if (user) navigate('/checkout');
                  else navigate('/login');
                }}
                className="w-full bg-[#b0212e] text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-black transition"
              >
                {user ? 'Proceed to Checkout' : 'Login to Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
