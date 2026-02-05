import React from 'react';
import { motion } from 'framer-motion';
import { MOVIES } from '../constants';
import { PlayCircle } from 'lucide-react';

const Filmography: React.FC = () => {
  return (
    <section id="filmography" className="py-24 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-2">Selected Productions</h2>
          <p className="font-sans text-brand-sage uppercase tracking-widest text-sm">Streaming on the Hallmark Channel & Peacock</p>
        </div>
        <div className="hidden md:block">
           <span className="text-brand-gold text-sm font-sans tracking-wider border-b border-brand-gold pb-1 cursor-pointer">View IMDB</span>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-8 px-6 pb-12 snap-x scrollbar-hide">
        {MOVIES.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-80 snap-center group relative cursor-pointer"
          >
            <div className="relative aspect-[2/3] overflow-hidden mb-4">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <PlayCircle className="text-brand-gold w-16 h-16" />
              </div>
            </div>
            
            <h3 className="font-serif text-2xl text-brand-cream group-hover:text-brand-gold transition-colors">{movie.title}</h3>
            <p className="font-sans text-brand-sage text-sm mb-1">{movie.year} • {movie.role}</p>
            <p className="font-serif italic text-brand-gold/80 text-sm">"{movie.tagline}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Filmography;