import React from 'react';

const Retail = () => {
    return (
        <main className="py-20 bg-brand-light min-h-screen">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Retail Products</h1>
                <div className="w-24 h-1 bg-brand-orange mx-auto rounded mb-12"></div>
                
                <img src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Retail" className="rounded-xl shadow-xl mb-12 w-full max-w-4xl mx-auto h-[400px] object-cover" />
                
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Bring the Gourmet Haven magic to your kitchen! We offer an extensive collection of packaged foods ranging from instant food mixes, cooking masalas, to ready-to-eat meals found on the shelves of supermarkets worldwide.
                </p>
                
                <a href="https://www.aabsweets.com/order/" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-brand-orange text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg">Shop Retail Online</a>
            </div>
        </main>
    );
};

export default Retail;
