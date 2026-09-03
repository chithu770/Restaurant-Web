import React, { useEffect, useContext } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionId) {
      navigate('/');
      return;
    }
    
    // Clear cart immediately upon landing on success page
    clearCart();
    
  }, [sessionId, clearCart, navigate]);

  return (
    <main className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full">
        <div>
          <i className="fa-solid fa-circle-check text-green-500 text-6xl mb-4"></i>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">Your order has been confirmed and is being prepared.</p>
          <Link to="/orders" className="bg-[#b0212e] text-white px-6 py-3 rounded-lg font-bold uppercase hover:bg-black transition block w-full mb-3">
            View Orders
          </Link>
          <Link to="/" className="text-gray-600 hover:text-[#b0212e] underline font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CheckoutSuccess;
