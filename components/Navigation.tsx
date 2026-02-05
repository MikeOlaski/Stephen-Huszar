import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Film, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-serif text-xl md:text-2xl tracking-[0.2em] text-brand-gold uppercase font-bold z-50 cursor-pointer"
          >
            Stephen<span className="text-brand-cream font-light">Huszar</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-brand-cream hover:text-brand-gold font-sans text-xs font-medium uppercase tracking-widest transition-colors duration-200 relative group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Social Icons - Updated Links */}
            <div className="flex items-center space-x-4 border-l border-brand-sage/20 pl-6">
              <a href="https://www.instagram.com/stephenhuszar/" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/in/stephen-huszar-8aab2027/" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors" title="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.imdb.com/name/nm1815849/" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors" title="IMDB">
                <Film size={16} />
              </a>
              <a href="https://app.fanfix.io/@stephenhuszar" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors" title="FanFix">
                <Heart size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-brand-gold z-50 focus:outline-none"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center space-y-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-3xl text-brand-cream hover:text-brand-gold transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex space-x-6 mt-8">
               <a href="https://www.instagram.com/stephenhuszar/" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/stephen-huszar-8aab2027/" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.imdb.com/name/nm1815849/" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors">
                <Film size={24} />
              </a>
              <a href="https://app.fanfix.io/@stephenhuszar" target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-gold transition-colors">
                <Heart size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;