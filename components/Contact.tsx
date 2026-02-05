import React from 'react';
import { Mail, Instagram, Linkedin, Globe, Film, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-brand-sage/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-brand-cream mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
           {/* Representation Card */}
           <div className="bg-brand-charcoal p-8 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors">
              <h3 className="font-serif text-xl text-brand-gold mb-4">Representation</h3>
              <p className="font-sans text-brand-cream mb-2 font-bold">Lucas Talent Inc.</p>
              <p className="font-sans text-brand-sage text-sm">Vancouver, BC</p>
              <a href="mailto:info@lucastalent.com" className="inline-flex items-center space-x-2 text-brand-gold mt-4 hover:underline">
                 <Mail size={16} />
                 <span>info@lucastalent.com</span>
              </a>
           </div>

           {/* Projects Card - Updated Links */}
           <div className="bg-brand-charcoal p-8 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors">
              <h3 className="font-serif text-xl text-brand-gold mb-4">Projects</h3>
              <ul className="space-y-4 text-left inline-block w-full">
                <li className="border-b border-brand-sage/10 pb-2">
                  <a href="http://MiltonsSecret.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-brand-cream hover:text-brand-gold transition-colors group">
                    <span className="font-sans text-sm tracking-wide">Milton's Secret</span>
                    <ExternalLink size={14} className="text-brand-sage group-hover:text-brand-gold" />
                  </a>
                </li>
                <li className="pt-2">
                  <a href="http://MindfulWorld.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-brand-cream hover:text-brand-gold transition-colors group">
                    <span className="font-sans text-sm tracking-wide">Mindful World</span>
                    <ExternalLink size={14} className="text-brand-sage group-hover:text-brand-gold" />
                  </a>
                </li>
              </ul>
           </div>

           {/* Social Media Card - Added Linktree */}
           <div className="bg-brand-charcoal p-8 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors flex flex-col items-center">
              <h3 className="font-serif text-xl text-brand-gold mb-4">Social Media</h3>
              <div className="grid grid-cols-3 gap-4">
                <a href="https://www.instagram.com/stephenhuszar/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:scale-110 transition-all" title="Instagram">
                   <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/stephen-huszar-8aab2027/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:scale-110 transition-all" title="LinkedIn">
                   <Linkedin size={20} />
                </a>
                 <a href="https://app.fanfix.io/@stephenhuszar" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:scale-110 transition-all" title="FanFix">
                   <Heart size={20} />
                </a>
                 <a href="https://www.imdb.com/name/nm1815849/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:scale-110 transition-all" title="IMDB">
                   <Film size={20} />
                </a>
                <a href="https://linktr.ee/stephenhuszar" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:scale-110 transition-all" title="Linktree">
                   <Globe size={20} />
                </a>
              </div>
           </div>
        </div>

        <form className="max-w-md mx-auto space-y-4 text-left">
           <div>
             <label className="block text-brand-sage text-xs uppercase tracking-widest mb-2">Name</label>
             <input type="text" className="w-full bg-brand-charcoal border border-brand-sage/20 text-brand-cream p-3 focus:outline-none focus:border-brand-gold transition-colors" />
           </div>
           <div>
             <label className="block text-brand-sage text-xs uppercase tracking-widest mb-2">Subject</label>
             <input type="text" className="w-full bg-brand-charcoal border border-brand-sage/20 text-brand-cream p-3 focus:outline-none focus:border-brand-gold transition-colors" />
           </div>
           <div>
             <label className="block text-brand-sage text-xs uppercase tracking-widest mb-2">Message</label>
             <textarea rows={4} className="w-full bg-brand-charcoal border border-brand-sage/20 text-brand-cream p-3 focus:outline-none focus:border-brand-gold transition-colors" />
           </div>
           <button type="button" className="w-full bg-brand-gold text-brand-dark py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors">
             Send Message
           </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;