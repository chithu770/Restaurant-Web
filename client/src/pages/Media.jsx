import React from 'react';

const Media = () => {
    const articles = [
        { title: "Gourmet Haven Opens 50th Outlet", date: "August 12, 2026", snippet: "The iconic restaurant chain continues its rapid expansion across the country..." },
        { title: "Awarded Best Vegetarian Restaurant", date: "June 25, 2026", snippet: "Food Critics Association names Gourmet Haven the top spot for traditional dining..." },
        { title: "New Sweets Line Introduced for Diwali", date: "October 10, 2025", snippet: "Prepare your taste buds for the festive season with our exclusive new creations..." }
    ];

    return (
        <main className="py-20 bg-brand-light min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Media & Press</h1>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded"></div>
                    <p className="mt-6 text-gray-600 text-lg">Latest news, press releases, and media coverage.</p>
                </div>
                
                {/* Unique Image for Media Page */}
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Media Banner" className="rounded-xl shadow-xl mb-12 w-full h-[300px] object-cover" />

                <div className="space-y-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-orange hover:shadow-lg transition">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{article.title}</h3>
                            <p className="text-sm text-brand-orange font-medium mb-4">{article.date}</p>
                            <p className="text-gray-600 mb-4">{article.snippet}</p>
                            <button className="text-brand-blue font-bold hover:underline">Read Full Article &rarr;</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Media;
