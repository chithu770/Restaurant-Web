import React from 'react';

const BrandStory = () => {
    return (
        <main className="py-20">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Our History</p>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-8">Brand Story</h1>
                <div className="w-24 h-1 bg-brand-orange mx-auto mb-12 rounded"></div>
                
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Restaurant History" className="rounded-xl shadow-xl mb-12 w-full h-[400px] object-cover" />
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
                    Our beloved founder was a person of remarkable discipline, hard work, and indomitable will. Throughout life, they battled hardships, but were unfazed by them. Holding onto a singular belief that "hard work eventually pays." That belief is now what we call Gourmet Haven.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
                    What started as a small, humble sweet shop has now blossomed into a global phenomenon. Over the decades, we have remained fiercely committed to our core values: purity, authenticity, and sustainability. Every recipe has been passed down through generations, ensuring that the taste you experience today is exactly as it was meant to be.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
                    Today, Gourmet Haven operates dozens of outlets worldwide, bringing the rich, aromatic flavors of traditional cuisine to the global stage, without ever compromising on quality or tradition.
                </p>
            </div>
        </main>
    );
};

export default BrandStory;
