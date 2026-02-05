import React from 'react';
import { Video, Heart, Star, Send } from 'lucide-react';
import { SOCIAL_POSTS } from '../constants';
import { motion } from 'framer-motion';

const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Paid Engagement Side */}
        <div>
           <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-8">Personal Requests</h2>
           <p className="font-sans text-brand-sage mb-12">Want a birthday shoutout for your mom? Or maybe a pep talk? I'm here for you.</p>
           
           <div className="grid gap-6">
             <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-brand-charcoal p-8 border border-brand-gold/20 flex items-center justify-between cursor-pointer group"
             >
                <div className="flex items-center space-x-4">
                  <a href="https://www.cameo.com/stephenhuszar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                    <div className="bg-pink-600/20 p-3 rounded-full text-pink-500">
                      <Video size={32} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-brand-cream">Cameo</h3>
                      <p className="text-sm text-brand-sage">Personalized Video Messages</p>
                    </div>
                  </a>
                </div>
                <ExternalLink className="text-brand-gold group-hover:translate-x-2 transition-transform" />
             </motion.div>

             <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-brand-charcoal p-8 border border-brand-gold/20 flex items-center justify-between cursor-pointer group"
             >
                <div className="flex items-center space-x-4">
                  <a href="https://app.fanfix.io/@stephenhuszar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                    <div className="bg-blue-600/20 p-3 rounded-full text-blue-500">
                      <Heart size={32} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-brand-cream">FanFix</h3>
                      <p className="text-sm text-brand-sage">Exclusive Behind-The-Scenes</p>
                    </div>
                  </a>
                </div>
                <ExternalLink className="text-brand-gold group-hover:translate-x-2 transition-transform" />
             </motion.div>
           </div>
        </div>

        {/* Social Feed Simulation */}
        <div>
           <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-8">Social Buzz</h2>
           <div className="space-y-6">
             {SOCIAL_POSTS.map((post) => (
               <div key={post.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center space-x-3">
                     <img src="https://picsum.photos/seed/avatar/100/100" className="w-10 h-10 rounded-full border border-brand-gold" alt="Avatar"/>
                     <span className="font-bold text-brand-cream text-sm">@StephenHuszar</span>
                   </div>
                   <span className="text-xs text-brand-sage uppercase tracking-wider">{post.platform}</span>
                 </div>
                 {post.image && (
                   <img src={post.image} alt="Social content" className="w-full h-64 object-cover rounded-md mb-4" />
                 )}
                 <p className="font-sans text-brand-cream text-sm leading-relaxed mb-4">{post.content}</p>
                 <div className="flex items-center space-x-2 text-brand-gold text-sm">
                   <Heart size={16} fill="currentColor" />
                   <span>{post.likes}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

// Helper for the links
const ExternalLink = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default Connect;