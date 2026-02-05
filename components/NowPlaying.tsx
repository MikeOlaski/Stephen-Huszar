import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const NowPlaying: React.FC = () => {
  return (
    <section id="now-playing" className="py-24 bg-brand-gold/10 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 text-brand-gold/5 pointer-events-none select-none">
        <Star size={400} />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="order-2 md:order-1"
        >
           <div className="inline-block bg-brand-red text-white font-bold font-sans text-xs px-3 py-1 mb-6 uppercase tracking-widest">
             Streaming Now
           </div>
           <h2 className="font-serif text-4xl md:text-6xl text-brand-cream mb-6">
             A Royal Christmas Crush
           </h2>
           <p className="font-sans text-brand-sage text-lg leading-relaxed mb-8">
             Stephen stars as Prince Henry in this holiday classic. When sparks fly at the Ice Hotel, traditions melt away to reveal true love.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4">
             <button className="px-8 py-3 bg-brand-gold text-brand-dark font-sans font-bold uppercase tracking-widest hover:bg-white transition-colors">
               Watch on Peacock
             </button>
             <button className="px-8 py-3 border border-brand-sage/30 text-brand-sage font-sans font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors">
               View Trailer
             </button>
           </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="order-1 md:order-2 relative aspect-[4/5] bg-brand-charcoal shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
        >
           <img 
             src="https://picsum.photos/seed/poster/800/1000" 
             alt="Now Playing Poster"
             className="w-full h-full object-cover" 
           />
        </motion.div>
      </div>
    </section>
  );
};

export default NowPlaying;