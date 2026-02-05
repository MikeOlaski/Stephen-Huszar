import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOVIES } from '../constants';
import { X, Calendar, User, Film } from 'lucide-react';

const Work: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<typeof MOVIES[0] | null>(null);

  return (
    <section id="work" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-brand-cream opacity-90"
          >
            Selected Work
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {MOVIES.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMovie(movie)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] overflow-hidden mb-6 bg-brand-charcoal">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark font-bold font-sans text-xs px-3 py-1">
                  {movie.year}
                </div>
              </div>
              
              <div className="border-l border-brand-gold/30 pl-4 transition-all duration-300 group-hover:border-brand-gold">
                <h3 className="font-serif text-2xl text-brand-cream group-hover:text-brand-gold transition-colors">{movie.title}</h3>
                <p className="font-sans text-brand-sage text-sm uppercase tracking-wider mt-1 mb-2">{movie.role}</p>
                <p className="font-serif italic text-brand-sage/60 text-sm">"{movie.tagline}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-sm"
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-charcoal w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border border-brand-gold/20 shadow-2xl relative flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedMovie(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-brand-dark/50 hover:bg-brand-gold hover:text-brand-dark rounded-full transition-colors text-brand-cream"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-2/5 aspect-[2/3] md:aspect-auto h-64 md:h-auto relative">
                <img 
                  src={selectedMovie.image} 
                  alt={selectedMovie.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent md:hidden" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-brand-gold font-sans uppercase tracking-widest text-xs mb-2">Selected Work</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-4">{selectedMovie.title}</h2>
                <p className="font-serif italic text-brand-sage text-lg mb-8">"{selectedMovie.tagline}"</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-brand-cream/80">
                    <User size={18} className="text-brand-gold" />
                    <span className="font-sans text-sm"><strong>Role:</strong> {selectedMovie.role}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-brand-cream/80">
                    <Calendar size={18} className="text-brand-gold" />
                    <span className="font-sans text-sm"><strong>Year:</strong> {selectedMovie.year}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-brand-cream/80">
                    <Film size={18} className="text-brand-gold" />
                    <span className="font-sans text-sm"><strong>Director:</strong> {selectedMovie.director || 'N/A'}</span>
                  </div>
                </div>

                <div className="border-t border-brand-sage/10 pt-6">
                  <h3 className="font-sans text-brand-gold uppercase tracking-widest text-xs mb-3">Synopsis</h3>
                  <p className="font-sans text-brand-sage leading-relaxed font-light">
                    {selectedMovie.synopsis || "No synopsis available for this title yet."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;