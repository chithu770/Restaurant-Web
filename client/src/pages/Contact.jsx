import React from 'react';

const Contact = () => {
    return (
        <main className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <p className="text-[#b0212e] text-[20px] font-serif font-bold italic mb-2">Get in touch</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Have a question or want to order catering? Reach out to us below.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send us a message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="bg-[#b0212e] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#b0212e] text-white p-4 rounded-full">
                                <i className="fa-solid fa-location-dot text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Our Location</h3>
                                <p className="text-gray-600">123 Flavor Street<br />Foodville, FL 32003</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-[#b0212e] text-white p-4 rounded-full">
                                <i className="fa-solid fa-phone text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Contact Number</h3>
                                <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-[#b0212e] text-white p-4 rounded-full">
                                <i className="fa-solid fa-clock text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Opening Hours</h3>
                                <p className="text-gray-600">Monday - Sunday<br />11:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
