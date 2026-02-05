import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Linkedin, Facebook, ExternalLink, FileText, Newspaper, Heart, Film } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'press' | 'privacy' | null>(null);

  // Cleaned up projects list - Removed FanFix to avoid redundancy/FanClub feel
  const projects = [
    { title: 'Hallmark Channel', url: 'https://www.hallmarkchannel.com/', icon: ExternalLink },
    { title: 'IMDB Profile', url: 'https://www.imdb.com/name/nm1815849/', icon: Film },
    { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stephen_Huszar', icon: ExternalLink },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal pt-20 pb-12 border-t border-brand-sage/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Project Links Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projects.map((proj, idx) => (
             <a 
               key={idx}
               href={proj.url}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-brand-dark/50 p-6 border border-brand-sage/10 hover:border-brand-gold/50 transition-all group flex items-center justify-between rounded-sm"
             >
                <span className="font-serif text-brand-cream text-lg group-hover:text-brand-gold transition-colors">{proj.title}</span>
                <proj.icon size={18} className="text-brand-sage group-hover:text-brand-gold transition-colors" />
             </a>
          ))}
        </div>

        {/* Brand & Socials */}
        <div className="flex flex-col items-center mb-12">
           <h2 className="font-serif text-3xl md:text-4xl text-brand-gold mb-6 tracking-wide">STEPHEN HUSZAR</h2>
           
           <div className="flex space-x-6 mb-8">
              <a href="https://www.instagram.com/stephenhuszar/" target="_blank" rel="noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:-translate-y-1 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/stephen-huszar-8aab2027/" target="_blank" rel="noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:-translate-y-1 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://app.fanfix.io/@stephenhuszar" target="_blank" rel="noreferrer" className="p-3 bg-brand-dark rounded-full text-brand-sage hover:text-brand-gold hover:-translate-y-1 transition-all">
                <Heart size={20} />
              </a>
           </div>

           {/* Footer Links */}
           <div className="flex flex-wrap justify-center gap-8 text-brand-sage text-xs uppercase tracking-widest font-medium">
             <button onClick={() => setActiveModal('press')} className="hover:text-brand-cream transition-colors">Press</button>
             <button onClick={handleContactClick} className="hover:text-brand-cream transition-colors">Contact</button>
             <a href="https://en.wikipedia.org/wiki/Stephen_Huszar" target="_blank" rel="noreferrer" className="hover:text-brand-cream transition-colors">Wikipedia</a>
             <button onClick={() => setActiveModal('privacy')} className="hover:text-brand-cream transition-colors">Privacy Policy</button>
           </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-brand-sage/5 pt-8">
           <p className="text-brand-sage/40 text-[10px] font-sans">
             © {new Date().getFullYear()} Stephen Huszar. All rights reserved.
           </p>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-charcoal max-w-lg w-full p-8 rounded-sm border border-brand-gold/20 relative shadow-2xl"
            >
               <button 
                 onClick={() => setActiveModal(null)}
                 className="absolute top-4 right-4 text-brand-sage hover:text-brand-gold transition-colors"
               >
                 <X size={24} />
               </button>

               {activeModal === 'press' && (
                 <>
                   <div className="flex items-center space-x-3 mb-6">
                     <Newspaper className="text-brand-gold" size={24} />
                     <h3 className="font-serif text-2xl text-brand-cream">Press Inquiries</h3>
                   </div>
                   <div className="space-y-4 text-brand-sage font-sans text-sm leading-relaxed">
                     <p>For all press, media, and interview requests, please contact representation directly.</p>
                     <div className="bg-brand-dark p-6 border-l-2 border-brand-gold">
                       <p className="text-brand-cream font-bold text-lg mb-2">Lucas Talent Inc.</p>
                       <p className="mb-1">Attn: Public Relations</p>
                       <a href="mailto:press@lucastalent.com" className="block text-brand-gold hover:underline mb-1">press@lucastalent.com</a>
                       <p>+1 (604) 555-0199</p>
                     </div>
                     <p className="text-xs italic opacity-70">Electronic Press Kits (EPK) and high-res assets available upon verified industry request.</p>
                   </div>
                 </>
               )}

               {activeModal === 'privacy' && (
                 <>
                   <div className="flex items-center space-x-3 mb-6">
                     <FileText className="text-brand-gold" size={24} />
                     <h3 className="font-serif text-2xl text-brand-cream">Privacy Policy</h3>
                   </div>
                   <div className="space-y-4 text-brand-sage font-sans text-sm leading-relaxed h-64 overflow-y-auto pr-2 custom-scrollbar">
                     <p className="font-bold text-brand-gold">Last Updated: {new Date().toLocaleDateString()}</p>
                     <p>Stephen Huszar ("we", "us") values your privacy. This policy outlines how we handle personal data collected through this website.</p>
                     
                     <h4 className="text-brand-cream font-bold mt-4 border-b border-brand-sage/10 pb-1">1. Information Collection</h4>
                     <p>We collect information you provide directly (e.g., contact forms, newsletter signups). We do not use persistent cookies for tracking beyond essential site functionality and performance metrics.</p>
                     
                     <h4 className="text-brand-cream font-bold mt-4 border-b border-brand-sage/10 pb-1">2. Use of Information</h4>
                     <p>Information is used solely to respond to professional inquiries, fan engagement, and booking requests. We do not sell, rent, or trade user data to third parties.</p>
                     
                     <h4 className="text-brand-cream font-bold mt-4 border-b border-brand-sage/10 pb-1">3. Third-Party Links</h4>
                     <p>This site contains links to external platforms (FanFix, Instagram, Hallmark). We are not responsible for the content or privacy practices of these third-party sites.</p>

                     <h4 className="text-brand-cream font-bold mt-4 border-b border-brand-sage/10 pb-1">4. Contact</h4>
                     <p>For privacy-related concerns, please contact our representation team.</p>
                   </div>
                 </>
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;