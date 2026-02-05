import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ShoppingBag } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <section id="shop" className="py-24 bg-brand-cream text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl mb-4">Sterling Essentials</h2>
          <p className="font-sans text-brand-charcoal/70 max-w-2xl mx-auto">
            Curated products to help you live your most romantic, centered life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group bg-white p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden mb-6 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-brand-dark text-brand-gold text-xs px-3 py-1 uppercase tracking-widest font-bold">
                    New Arrival
                  </span>
                )}
                <button className="absolute bottom-4 right-4 bg-brand-gold text-brand-dark p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                   <ShoppingBag size={20} />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-brand-charcoal/50 uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">{product.name}</h3>
                <p className="font-sans font-bold text-brand-gold text-lg">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-brand-dark text-brand-cream px-8 py-4 font-sans uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;