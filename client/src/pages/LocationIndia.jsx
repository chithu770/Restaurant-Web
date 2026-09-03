import React from 'react';

const LocationIndia = () => {
    const locations = [
        { city: "Chennai", address: "123 Anna Salai, Teynampet, Chennai - 600018", phone: "044-12345678" },
        { city: "Bengaluru", address: "45 MG Road, Shivaji Nagar, Bengaluru - 560001", phone: "080-87654321" },
        { city: "Hyderabad", address: "78 Jubilee Hills, Road No 36, Hyderabad - 500033", phone: "040-11223344" }
    ];

    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Indian Outlets</h1>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded"></div>
                    <p className="mt-6 text-gray-600 text-lg">Find a Gourmet Haven near you in India.</p>
                </div>
                
                {/* Unique Image for India Locations */}
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="India Locations Banner" className="rounded-xl shadow-xl mb-12 w-full max-w-4xl mx-auto h-[300px] object-cover" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                            <h3 className="text-2xl font-serif font-bold text-brand-orange mb-4">{loc.city}</h3>
                            <p className="text-gray-700 mb-4">{loc.address}</p>
                            <p className="text-gray-500 font-medium"><i className="fa-solid fa-phone mr-2"></i> {loc.phone}</p>
                            <button className="mt-6 w-full border-2 border-brand-blue text-brand-blue py-2 rounded font-bold hover:bg-brand-blue hover:text-white transition">Get Directions</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default LocationIndia;
