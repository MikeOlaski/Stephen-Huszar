import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('reel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Opacity Overlay */}
      <div className="absolute inset-0 z-0">
        {/* 
           INSTRUCTION: 
           Please save the image you provided as 'hero-tuxedo.jpg' 
           and place it in your project's 'public' folder.
        */}
        <img
          src="/hero-tuxedo.jpg" 
          onError={(e) => {
            // Fallback to a high-quality placeholder if the local file isn't found yet
            e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop";
          }}
          alt="Stephen Huszar Header"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans text-brand-gold tracking-[0.5em] text-xs md:text-sm uppercase mb-6 drop-shadow-lg"
        >
          Actor • Producer • Mindful Living
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-serif text-5xl md:text-8xl text-brand-cream font-medium leading-none mb-8 drop-shadow-2xl"
        >
          STEPHEN
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-100 to-brand-gold">
            HUSZAR
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-sans text-brand-cream/90 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto drop-shadow-md"
        >
          Captivating audiences with heart, humor, and authenticity.
        </motion.p>
      </div>

      <motion.a
        href="#reel"
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.a>
    </section>
  );
};

export default Hero;