import React from 'react';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544025162-811114cd31eb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    ];

    return (
        <main className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-[#b0212e] text-[20px] font-serif font-bold italic mb-2">Our World</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Gallery</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Take a peek into our kitchen, our cozy dining spaces, and the beautiful dishes we serve every day.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-xl shadow-md group">
                            <img 
                                src={img} 
                                alt={`Gallery item ${idx+1}`} 
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Gallery;
