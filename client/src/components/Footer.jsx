import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-16">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* 4 Column Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="text-3xl font-serif font-bold text-[#b0212e] leading-none mb-6">
                            Spice Table
                        </div>
                        <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                            Fresh ingredients, bold flavors, and a cozy dining experience made for family dinners, quick lunches, and weekend celebrations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[14px] font-bold mb-6 text-gray-800 uppercase tracking-widest">QUICK LINKS</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-500 text-[14px] hover:text-[#b0212e] transition">Home</Link></li>
                            <li><Link to="/menu" className="text-gray-500 text-[14px] hover:text-[#b0212e] transition">Menu</Link></li>
                            <li><Link to="/reservations" className="text-gray-500 text-[14px] hover:text-[#b0212e] transition">Reservations</Link></li>
                            <li><Link to="/gallery" className="text-gray-500 text-[14px] hover:text-[#b0212e] transition">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-500 text-[14px] hover:text-[#b0212e] transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-[14px] font-bold mb-6 text-gray-800 uppercase tracking-widest">ADDRESS</h4>
                        <address className="not-italic text-gray-500 text-[14px] mb-6 leading-relaxed">
                            123 Flavor Street<br />
                            Foodville, FL 32003
                        </address>
                        
                        <h4 className="text-[14px] font-bold mb-2 text-gray-800 uppercase tracking-widest">PHONE:</h4>
                        <p className="text-gray-500 text-[14px] mb-6">
                            <a href="tel:+15551234567" className="hover:text-[#b0212e] transition">+1 (555) 123-4567</a>
                        </p>
                        
                        <h4 className="text-[14px] font-bold mb-2 text-gray-800 uppercase tracking-widest">EMAIL:</h4>
                        <p className="text-gray-500 text-[14px] mb-6"><a href="mailto:hello@spicetable.com" className="hover:text-[#b0212e] transition">hello@spicetable.com</a></p>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h4 className="text-[14px] font-bold mb-6 text-gray-800 uppercase tracking-widest">NEWSLETTER</h4>
                        <p className="text-gray-500 text-[14px] mb-4">Stay connected! Sign-up for our newsletter.</p>
                        <form className="flex border border-gray-300 rounded overflow-hidden">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="px-4 py-3 w-full text-gray-800 text-[14px] focus:outline-none" 
                                required
                            />
                            <button type="submit" className="bg-[#b0212e] text-white px-4 py-3 text-[14px] font-bold uppercase hover:bg-black transition">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                        <div className="mt-8">
                            <h4 className="text-[14px] font-bold mb-4 text-gray-800 uppercase tracking-widest">FOLLOW US</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-500 hover:text-[#b0212e] transition text-xl"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="text-gray-500 hover:text-[#b0212e] transition text-xl"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#" className="text-gray-500 hover:text-[#b0212e] transition text-xl"><i className="fa-brands fa-x-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-200 text-[13px] text-gray-500 font-medium">
                    <p className="mb-4 md:mb-0">Copyright &copy; {new Date().getFullYear()} Spice Table. All rights reserved.</p>
                    <p>Designed with passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
