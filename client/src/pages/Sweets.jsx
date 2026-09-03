import React from 'react';

const Sweets = () => {
    return (
        <main className="py-20 bg-brand-light min-h-screen">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Exclusive Sweets</h1>
                <div className="w-24 h-1 bg-brand-orange mx-auto rounded mb-12"></div>
                
                {/* Unique Image for Sweets Page */}
                <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Sweets Page Banner" className="rounded-xl shadow-xl mb-12 w-full max-w-4xl mx-auto h-[400px] object-cover" />
                
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Explore our wide range of sweets, from timeless classics to our innovative creations, perfect for every occasion. Taste the love and passion in every bite. Our master chefs prepare each sweet using the finest quality ingredients, ensuring authenticity and unmatched flavor.
                </p>
                
                <a href="https://www.aabsweets.com/order/" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-brand-orange text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg">Order Sweets Online</a>
            </div>
        </main>
    );
};

export default Sweets;
