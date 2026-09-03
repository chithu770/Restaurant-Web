import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const { getCartCount } = useContext(CartContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate('/');
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-[#b0212e] text-white text-[13px] py-2 px-4 text-center tracking-wide font-sans hidden md:block">
                Delicious food delivered to your door! Free delivery over $50.
            </div>

            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <div className="text-3xl font-serif font-bold text-[#b0212e] leading-none">
                                Spice Table
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-6 items-center flex-grow justify-center">
                            <Link to="/" className="text-gray-800 text-[15px] hover:text-[#b0212e] font-bold uppercase transition">Home</Link>
                            <Link to="/menu" className="text-gray-800 text-[15px] hover:text-[#b0212e] font-bold uppercase transition">Menu</Link>
                            <Link to="/reservations" className="text-gray-800 text-[15px] hover:text-[#b0212e] font-bold uppercase transition">Reservations</Link>
                        </nav>

                        {/* Right side actions */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {/* User Menu */}
                            {user ? (
                                <div className="relative group">
                                    <button className="flex items-center gap-2 text-gray-800 hover:text-[#b0212e] font-bold">
                                        <i className="fa-regular fa-user"></i> {user.name}
                                    </button>
                                    <div className="absolute right-0 top-[100%] w-48 bg-white shadow-lg border-t-2 border-[#b0212e] z-50 hidden group-hover:block pt-2">
                                        <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#b0212e]">My Orders</Link>
                                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</button>
                                    </div>
                                </div>
                            ) : (
                                <Link to="/login" className="text-gray-800 hover:text-[#b0212e] font-bold uppercase text-[14px]">Login</Link>
                            )}

                            {/* Cart */}
                            <Link to="/cart" className="relative text-gray-800 hover:text-[#b0212e] text-2xl">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {getCartCount() > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#b0212e] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                                        {getCartCount()}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <Link to="/cart" className="relative text-gray-800 text-xl">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {getCartCount() > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#b0212e] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                                        {getCartCount()}
                                    </span>
                                )}
                            </Link>
                            <button 
                                className="text-gray-800 focus:outline-none text-2xl"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner">
                        <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-gray-800 font-bold uppercase text-[13px] border-b border-gray-100">Home</Link>
                            <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-gray-800 font-bold uppercase text-[13px] border-b border-gray-100">Menu</Link>
                            <Link to="/reservations" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-gray-800 font-bold uppercase text-[13px] border-b border-gray-100">Reservations</Link>
                            
                            {user ? (
                                <>
                                    <Link to="/orders" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-gray-800 font-bold uppercase text-[13px] border-b border-gray-100">My Orders</Link>
                                    <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-red-600 font-bold uppercase text-[13px]">Logout</button>
                                </>
                            ) : (
                                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-[#b0212e] font-bold uppercase text-[13px]">Login / Register</Link>
                            )}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
