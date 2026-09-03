import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { token, user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetch('/api/orders/my-orders', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
    }
  }, [token]);

  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Please login to view your orders</h2>
        <Link to="/login" className="bg-[#b0212e] text-white px-8 py-3 rounded-full font-bold">Login</Link>
      </div>
    );
  }

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">My Orders</h1>
        
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <i className="fa-solid fa-receipt text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-xl font-bold mb-2">No orders yet</h2>
            <p className="text-gray-500 mb-6">When you place an order, it will appear here.</p>
            <Link to="/menu" className="bg-[#b0212e] text-white px-6 py-2 rounded-lg font-bold">Order Now</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between mb-4 border-b pb-4 gap-4">
                  <div>
                    <span className="text-gray-500 text-sm">Order ID</span>
                    <p className="font-mono font-bold">{order._id}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Date</span>
                    <p className="font-bold">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Total</span>
                    <p className="font-bold text-[#b0212e]">${order.totalAmount.toFixed(2)}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Status</span>
                    <p className="font-bold uppercase text-green-600">
                      <i className="fa-solid fa-circle text-xs mr-2"></i>
                      {order.status}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Payment</span>
                    <p className={`font-bold uppercase ${order.paymentStatus === 'paid' ? 'text-green-600' : 'text-orange-500'}`}>
                      {order.paymentStatus}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800">Items:</h4>
                  <ul className="text-gray-600">
                    {order.items.map(item => (
                      <li key={item._id} className="flex justify-between">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Orders;
