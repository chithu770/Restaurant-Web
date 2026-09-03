import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop" 
                        alt="Restaurant Interior" 
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">Welcome to Spice Table</h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light drop-shadow-md">
                        Fresh ingredients, bold flavors, and a cozy dining experience made for family dinners, quick lunches, and weekend celebrations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/menu" className="bg-[#b0212e] text-white px-8 py-4 rounded-full text-[15px] font-bold uppercase tracking-wider hover:bg-black transition shadow-lg">
                            View Menu & Order
                        </Link>
                        <Link to="/reservations" className="bg-white text-[#b0212e] px-8 py-4 rounded-full text-[15px] font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-lg">
                            Book a Table
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl">
                    <div className="md:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop" 
                            alt="Chef cooking" 
                            className="rounded-2xl shadow-xl w-full"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                        <p className="text-[#b0212e] text-[20px] font-serif font-bold italic mb-2">Our Story</p>
                        <h2 className="text-gray-900 text-[36px] md:text-[48px] font-serif font-bold leading-tight mb-6">A tradition of authentic taste</h2>
                        <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                            At Spice Table, we believe in the power of bringing people together over a good meal. Our family has been serving authentic, heart-warming dishes for over two decades. 
                        </p>
                        <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
                            Every dish tells a story, starting from carefully sourced fresh ingredients to the rich blend of spices that define our culinary style. Come join us and become part of our extended family.
                        </p>
                        <Link to="/contact" className="inline-block border-2 border-[#b0212e] text-[#b0212e] px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-wider hover:bg-[#b0212e] hover:text-white transition">
                            Visit Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Menu Highlights */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <p className="text-[#b0212e] text-[20px] font-serif font-bold italic mb-2">Signature Dishes</p>
                    <h2 className="text-gray-900 text-[36px] md:text-[48px] font-serif font-bold mb-12">Menu Highlights</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Highlight 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col text-left">
                            <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=350&fit=crop" alt="Chef's Special Biryani" className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">Chef's Special Biryani</h3>
                                </div>
                                <p className="text-sm text-gray-500 mb-4 flex-grow">Aromatic basmati rice cooked with tender meat, exotic spices, and saffron.</p>
                                <Link to="/menu" className="text-center bg-[#b0212e] text-white py-2 rounded-lg font-bold hover:bg-black transition">Order Now</Link>
                            </div>
                        </div>
                        {/* Highlight 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col text-left">
                            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop" alt="Paneer Tikka Masala" className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">Paneer Tikka Masala</h3>
                                </div>
                                <p className="text-sm text-gray-500 mb-4 flex-grow">Grilled cottage cheese cubes in a rich, creamy tomato gravy.</p>
                                <Link to="/menu" className="text-center bg-[#b0212e] text-white py-2 rounded-lg font-bold hover:bg-black transition">Order Now</Link>
                            </div>
                        </div>
                        {/* Highlight 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col text-left">
                            <img src="https://images.unsplash.com/photo-1544025162-811114cd31eb?w=500&h=350&fit=crop" alt="Signature Drink" className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">Mango Mint Cooler</h3>
                                </div>
                                <p className="text-sm text-gray-500 mb-4 flex-grow">A refreshing blend of fresh mango puree, mint leaves, and a hint of lime.</p>
                                <Link to="/menu" className="text-center bg-[#b0212e] text-white py-2 rounded-lg font-bold hover:bg-black transition">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
