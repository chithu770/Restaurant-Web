import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutCancel = () => {
  return (
    <main className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full">
        <i className="fa-solid fa-triangle-exclamation text-yellow-500 text-6xl mb-4"></i>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">You cancelled the payment. No charges were made.</p>
        <Link to="/checkout" className="bg-[#b0212e] text-white px-6 py-3 rounded-lg font-bold uppercase hover:bg-black transition block w-full mb-3">
          Try Again
        </Link>
        <Link to="/cart" className="text-gray-600 hover:text-[#b0212e] underline font-medium">
          Return to Cart
        </Link>
      </div>
    </main>
  );
};

export default CheckoutCancel;
