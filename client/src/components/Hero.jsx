import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full">
            {/* Main Hero Image */}
            <div className="w-full h-[50vh] md:h-[80vh] relative">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Restaurant Interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Overlapping Info Box */}
            <div className="container mx-auto px-4 relative -mt-16 md:-mt-24 z-10 flex justify-center">
                <div className="bg-white p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[90%] md:w-[70%] lg:w-[50%] text-center">
                    <h2 className="text-[#005198] text-2xl md:text-[32px] font-serif font-bold leading-tight mb-2">
                        Gourmet Haven
                    </h2>
                    <h3 className="text-[#b0212e] text-[18px] md:text-[22px] font-serif font-bold italic mb-6">
                        House of exclusive Delicacies
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                        Everything that we bring you is pure, delicious and authentic. At Gourmet Haven, we prepare only using the finest ingredients, following time-tested methods. Experience a perfect blend of timeless tradition and innovation in every bite.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
