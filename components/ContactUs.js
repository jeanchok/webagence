import React from 'react';
import Link from "next/link";

const ContactUs = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid.svg')] opacity-10"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF6060] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Un projet en tête ?
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Discutons de vos idées et voyons comment nous pouvons vous aider à les concrétiser. Devis gratuit et sans engagement.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-[#FF6060] text-white font-bold rounded-full hover:bg-[#ff4d4d] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#FF6060]/50">
                        Contactez-nous
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;