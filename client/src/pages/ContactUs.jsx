import React from 'react';

const ContactUs = () => {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Contact Us</h1>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded"></div>
                    <p className="mt-6 text-gray-600 text-lg">We would love to hear from you!</p>
                </div>
                
                {/* Unique Image for Contact Us Page */}
                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Contact Banner" className="rounded-xl shadow-xl mb-12 w-full h-[300px] object-cover" />

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                        <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6">Get in Touch</h3>
                            <div className="mb-6">
                                <h4 className="font-bold text-gray-800">Corporate Office</h4>
                                <p className="text-gray-600">No: 123, Culinary Street, Food District, Downtown Metro - 10001</p>
                            </div>
                            <div className="mb-6">
                                <h4 className="font-bold text-gray-800">Phone</h4>
                                <p className="text-gray-600">+1 (234) 567-890</p>
                            </div>
                            <div className="mb-6">
                                <h4 className="font-bold text-gray-800">Email</h4>
                                <p className="text-brand-orange">care@gourmethaven.com</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-2/3">
                        <form className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Name *</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-orange" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-orange" required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-orange" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                                <textarea rows="5" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-orange" required></textarea>
                            </div>
                            <button type="submit" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-orange transition">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
