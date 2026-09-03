import React from 'react';

const CenterOfExcellence = () => {
    return (
        <main className="py-20">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-8">Center Of Excellence</h1>
                <div className="w-24 h-1 bg-brand-orange mx-auto mb-12 rounded"></div>
                
                <img src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Excellence" className="rounded-xl shadow-xl mb-12 w-full h-[400px] object-cover" />
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
                    At Gourmet Haven, our Center of Excellence is the beating heart of our culinary innovation. It is here that traditional recipes are perfected, and new flavors are born through rigorous research and development.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
                    We source only the highest quality ingredients, testing each batch for purity and consistency. Our master chefs and food technologists work hand-in-hand to ensure that every product meets strict global standards without losing its authentic touch.
                </p>
            </div>
        </main>
    );
};

export default CenterOfExcellence;
