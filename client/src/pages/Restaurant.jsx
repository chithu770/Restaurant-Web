import React from 'react';

const Restaurant = () => {
    return (
        <main className="py-20 bg-brand-light min-h-screen">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Fine Dining</h1>
                <div className="w-24 h-1 bg-brand-orange mx-auto rounded mb-12"></div>
                
                {/* Unique Image for Restaurant Page */}
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Restaurant Page Banner" className="rounded-xl shadow-xl mb-12 w-full max-w-4xl mx-auto h-[400px] object-cover" />
                
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    We have everything you would expect for a cosy meal time with your family. With an incredible menu covering the widest vegetarian fare across cuisines, you are sure to be spoilt for choice. Come and experience true culinary delight in a welcoming ambiance.
                </p>
            </div>
        </main>
    );
};

export default Restaurant;
