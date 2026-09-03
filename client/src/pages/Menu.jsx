import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch('/api/menu')
            .then(res => res.json())
            .then(data => {
                setMenuItems(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // Group items by category
    const groupedItems = menuItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <main className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <p className="text-[#b0212e] text-[20px] font-serif font-bold italic mb-2">Discover</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Menu</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our range of authentic dishes made with fresh ingredients and traditional spices.</p>
                </div>

                {loading ? (
                    <div className="text-center text-gray-500">Loading menu...</div>
                ) : Object.keys(groupedItems).length === 0 ? (
                    <div className="text-center text-gray-500">No items available currently.</div>
                ) : (
                    <div className="space-y-16">
                        {Object.entries(groupedItems).map(([category, items]) => (
                            <section key={category}>
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">{category}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {items.map(item => (
                                        <div key={item._id} className="flex gap-4 items-start border-b border-gray-100 pb-4 group">
                                            {item.imageURL && (
                                                <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg shadow-sm">
                                                    <img src={item.imageURL} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300" />
                                                </div>
                                            )}
                                            <div className="flex-1 pr-2">
                                                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                                                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                                                <div className="mt-2 flex gap-2">
                                                    {item.tags?.map(tag => (
                                                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end shrink-0">
                                                <span className="text-[#b0212e] font-bold text-lg mb-3">${item.price.toFixed(2)}</span>
                                                <button 
                                                    onClick={() => addToCart(item)}
                                                    className="bg-[#b0212e] text-white md:bg-gray-100 md:text-[#b0212e] px-4 py-2 rounded-full text-sm font-bold hover:bg-black hover:text-white transition md:opacity-0 md:group-hover:opacity-100"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Menu;
