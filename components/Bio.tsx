import React from 'react';
import { motion } from 'framer-motion';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-24 px-6 md:px-12 bg-brand-dark relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl text-brand-cream"
          >
            The Journey to <span className="text-brand-gold italic">Serenity</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 font-sans text-brand-sage leading-relaxed text-lg"
          >
            <p>
              It started in a small town much like the ones I now save on screen. 
              I was just a boy with a dream and a suspiciously perfect jawline. 
              After getting discovered buying organic kale at a farmers market in LA, 
              my life transformed.
            </p>
            <p>
              From playing "Handsome Bystander #3" to capturing hearts as the 
              lead in <em>"Love at the Latte"</em>, I've learned that life is about balance.
              Between takes, you'll find me on my mat, centering my chakras and 
              perfecting my warrior pose.
            </p>
            <div className="border-l-2 border-brand-gold pl-6 py-2 italic text-brand-cream">
              "True love is great, but have you ever held a plank for 4 minutes?"
            </div>
          </motion.div>
        </div>

        {/* Image Side - Abstract Composition */}
        <div className="relative h-[600px] w-full">
           <motion.div
             className="absolute top-0 right-0 w-3/4 h-3/4 z-10"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <img 
               src="https://picsum.photos/seed/chasebio1/600/800" 
               alt="Chase posing" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
           </motion.div>
           
           <motion.div
             className="absolute bottom-0 left-0 w-1/2 h-1/2 z-20 border-4 border-brand-dark"
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
           >
             <img 
               src="https://picsum.photos/seed/chaseyogo/400/400" 
               alt="Chase yoga" 
               className="w-full h-full object-cover"
             />
           </motion.div>

           <div className="absolute -z-10 top-1/2 left-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Bio;