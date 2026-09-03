import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id="services" className="pt-24 pb-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Service 1: Sweets */}
                    <div className="text-center flex flex-col h-full">
                        <div className="h-16 flex justify-center items-center mb-6 text-[#f47920] text-5xl">
                            <i className="fa-solid fa-cookie"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 text-[16px] mb-4">House of exclusive Indian Sweets</h4>
                        <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">
                            Explore our wide range of sweets, from timeless Indian classics to our innovative creations, perfect for every occasion. Taste the love and passion in every bite.
                        </p>
                        <Link to="/products/sweets" className="inline-block border border-gray-300 text-gray-600 px-6 py-2 text-[12px] font-bold uppercase tracking-wider hover:bg-[#b0212e] hover:text-white hover:border-[#b0212e] transition w-max mx-auto mb-8">
                            READ MORE
                        </Link>
                        <div className="grid grid-cols-3 gap-2 mt-auto">
                            <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=150&h=150&fit=crop" alt="Sweet 1" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=150&h=150&fit=crop" alt="Sweet 2" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=150&h=150&fit=crop" alt="Sweet 3" className="w-full aspect-square object-cover rounded" />
                        </div>
                    </div>

                    {/* Service 2: Veg Restaurant */}
                    <div className="text-center flex flex-col h-full">
                        <div className="h-16 flex justify-center items-center mb-6 text-[#005198] text-5xl">
                            <i className="fa-solid fa-utensils"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 text-[16px] mb-4">High class Vegetarian Restaurant</h4>
                        <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">
                            Our restaurants have everything you would expect for a cosy meal time with your family. With an incredible menu covering the widest vegetarian fare across cuisines.
                        </p>
                        <Link to="/products/restaurant" className="inline-block border border-gray-300 text-gray-600 px-6 py-2 text-[12px] font-bold uppercase tracking-wider hover:bg-[#b0212e] hover:text-white hover:border-[#b0212e] transition w-max mx-auto mb-8">
                            READ MORE
                        </Link>
                        <div className="grid grid-cols-3 gap-2 mt-auto">
                            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=150&h=150&fit=crop" alt="Dining 1" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=150&h=150&fit=crop" alt="Dining 2" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150&h=150&fit=crop" alt="Dining 3" className="w-full aspect-square object-cover rounded" />
                        </div>
                    </div>

                    {/* Service 3: Snacks */}
                    <div className="text-center flex flex-col h-full">
                        <div className="h-16 flex justify-center items-center mb-6 text-[#018C45] text-5xl">
                            <i className="fa-solid fa-bowl-rice"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 text-[16px] mb-4">The Taste of Joy!</h4>
                        <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">
                            We have an extensive collection of packaged foods ranging from sweets, savouries, pickles, instant food mixes, found in shelves of every supermarket.
                        </p>
                        <Link to="/products/retail" className="inline-block border border-gray-300 text-gray-600 px-6 py-2 text-[12px] font-bold uppercase tracking-wider hover:bg-[#b0212e] hover:text-white hover:border-[#b0212e] transition w-max mx-auto mb-8">
                            READ MORE
                        </Link>
                        <div className="grid grid-cols-3 gap-2 mt-auto">
                            <img src="https://images.unsplash.com/photo-1626074964010-bfa99ca3fa06?w=150&h=150&fit=crop" alt="Snack 1" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=150&h=150&fit=crop" alt="Snack 2" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?w=150&h=150&fit=crop" alt="Snack 3" className="w-full aspect-square object-cover rounded" />
                        </div>
                    </div>

                    {/* Service 4: Others */}
                    <div className="text-center flex flex-col h-full">
                        <div className="h-16 flex justify-center items-center gap-4 mb-6 text-gray-400 text-3xl">
                            <i className="fa-solid fa-leaf text-[#018C45]"></i>
                            <i className="fa-solid fa-bread-slice text-[#f47920]"></i>
                            <i className="fa-solid fa-bed text-[#005198]"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 text-[16px] mb-4">Greens, Bakery & Residency</h4>
                        <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">
                            Discover Greens for farm fresh produce, Bakery for delightful bakes and pastries, and Residency for top-notch hospitality in select locations.
                        </p>
                        <div className="h-[34px] mb-8"></div> {/* Spacer for missing button */}
                        <div className="grid grid-cols-3 gap-2 mt-auto">
                            <img src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=150&h=150&fit=crop" alt="Other 1" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop" alt="Other 2" className="w-full aspect-square object-cover rounded" />
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=150&h=150&fit=crop" alt="Other 3" className="w-full aspect-square object-cover rounded" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
