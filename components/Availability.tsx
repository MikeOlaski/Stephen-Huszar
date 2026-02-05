import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Sparkles, MessageCircle, ArrowRight, UserCheck, Globe } from 'lucide-react';

interface AvailabilityProps {
  onOpenChat: () => void;
}

const Availability: React.FC<AvailabilityProps> = ({ onOpenChat }) => {
  const isAvailable = false; // Mock status logic

  const services = [
    { icon: Video, text: "Personalized Messages (Cameo-style)" },
    { icon: UserCheck, text: "Virtual Appearances" },
    { icon: Calendar, text: "Limited Booking Requests" },
    { icon: Sparkles, text: "Private / Corporate Events" }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="availability" className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-sage/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-sage/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-brand-cream mb-4 tracking-wide"
          >
            AVAILABILITY
          </motion.h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-8" />
          
          {/* Status Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-brand-charcoal/80 backdrop-blur-sm border border-brand-sage/20 px-6 py-3 rounded-full shadow-lg"
          >
            <div className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAvailable ? 'bg-green-400' : 'bg-red-500'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isAvailable ? 'bg-green-500' : 'bg-red-600'}`}></span>
            </div>
            <span className="font-sans text-xs md:text-sm text-brand-sage uppercase tracking-widest font-medium">
              {isAvailable ? 'Currently Booking' : 'On Location / Filming'}
            </span>
          </motion.div>
        </div>

        {/* Main Content Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-charcoal border border-brand-gold/10 p-8 md:p-12 rounded-sm shadow-2xl relative"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-gold/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-gold/40" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Services List */}
            <div>
               <h3 className="font-serif text-2xl text-brand-gold mb-8">Engagement Opportunities</h3>
               <ul className="space-y-6">
                 {services.map((item, idx) => (
                   <motion.li 
                     key={idx}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="flex items-center space-x-4 text-brand-cream/90 group"
                   >
                     <div className="p-2 bg-brand-dark rounded-full border border-brand-sage/20 text-brand-gold group-hover:border-brand-gold/50 transition-colors">
                       <item.icon size={18} />
                     </div>
                     <span className="font-sans text-sm md:text-base tracking-wide font-light">{item.text}</span>
                   </motion.li>
                 ))}
               </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-5 md:border-l md:border-brand-sage/10 md:pl-12">
               <p className="font-serif text-brand-sage italic mb-6 text-lg leading-relaxed">
                 "From set to signing, let's create something memorable."
               </p>
               
               {/* Button 1: Primary CTA - Access Online */}
               <a 
                 href="#/input" // Pointing to the strategy/input page or external portal
                 className="group w-full py-4 bg-brand-gold text-brand-dark font-sans font-bold uppercase tracking-widest text-center hover:bg-brand-cream transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
               >
                 <span>Access Stephen Online</span>
                 <Globe size={18} className="group-hover:rotate-12 transition-transform" />
               </a>

               {/* Button 2: Secondary - Request Availability */}
               <a 
                 href="#contact"
                 onClick={scrollToContact}
                 className="group w-full py-4 border-2 border-brand-gold/80 text-brand-gold font-sans font-bold uppercase tracking-widest text-center hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 flex items-center justify-center space-x-3"
               >
                 <span>Request Availability</span>
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </a>

               {/* Button 3: Tertiary - Chat with AI */}
               <button 
                 onClick={onOpenChat}
                 className="group w-full py-4 border border-brand-sage/30 text-brand-sage font-sans font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center space-x-3 bg-brand-dark/30 hover:bg-brand-dark"
               >
                 <MessageCircle size={18} className="group-hover:animate-pulse" />
                 <span>Chat with AI Stephen</span>
               </button>

               <div className="text-center mt-2">
                 <p className="text-[10px] uppercase tracking-widest text-brand-sage/40">
                   Representation: Lucas Talent Inc.
                 </p>
               </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Availability;