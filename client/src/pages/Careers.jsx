import React from 'react';

const Careers = () => {
    return (
        <main className="py-20">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-8">Careers</h1>
                <div className="w-24 h-1 bg-brand-orange mx-auto mb-12 rounded"></div>
                
                {/* Unique Image for Careers Page */}
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Careers Banner" className="rounded-xl shadow-xl mb-12 w-full h-[400px] object-cover" />
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Join the Gourmet Haven family! We are always on the lookout for passionate, dedicated individuals who share our love for authentic food and exceptional customer service.
                </p>
                
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-left mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Openings</h3>
                    
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h4 className="text-xl font-bold text-brand-blue">Restaurant Manager</h4>
                        <p className="text-gray-500 mb-2">Location: Bengaluru, India</p>
                        <button className="text-brand-orange font-bold hover:underline">Apply Now</button>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h4 className="text-xl font-bold text-brand-blue">Executive Chef</h4>
                        <p className="text-gray-500 mb-2">Location: New York, USA</p>
                        <button className="text-brand-orange font-bold hover:underline">Apply Now</button>
                    </div>
                    
                    <div className="pb-4">
                        <h4 className="text-xl font-bold text-brand-blue">Customer Service Associate</h4>
                        <p className="text-gray-500 mb-2">Location: Multiple Outlets</p>
                        <button className="text-brand-orange font-bold hover:underline">Apply Now</button>
                    </div>
                </div>

                <p className="text-gray-600">Don't see a role that fits? Send your resume to <a href="mailto:careers@gourmethaven.com" className="text-brand-orange hover:underline font-bold">careers@gourmethaven.com</a></p>
            </div>
        </main>
    );
};

export default Careers;
