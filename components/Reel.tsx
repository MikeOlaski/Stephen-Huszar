import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight, ChevronLeft, X, Maximize2 } from 'lucide-react';
import { GALLERY_DATA, REEL_CONTENT } from '../constants';

type Category = 'Dramatic' | 'Commercial' | 'Film';

const Reel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('Dramatic');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: Category[] = ['Dramatic', 'Commercial', 'Film'];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setGalleryOpen(true);
  };

  return (
    <section id="reel" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-brand-cream"
          >
            The Reel
          </motion.h2>
          
          <div className="mt-4 md:mt-0 flex space-x-2 bg-brand-charcoal/50 p-1 rounded-full border border-brand-sage/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-brand-gold text-brand-dark font-bold shadow-lg' 
                    : 'text-brand-sage hover:text-brand-cream hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Video Area */}
        <motion.div 
          key={activeTab} // Triggers animation on tab change
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full bg-brand-charcoal group cursor-pointer overflow-hidden rounded-sm border border-brand-charcoal hover:border-brand-gold/30 transition-colors mb-16"
        >
            <img 
              src={REEL_CONTENT[activeTab].poster} 
              alt={`${activeTab} Reel`} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-brand-gold/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm bg-black/30">
                    <Play className="text-brand-gold fill-brand-gold ml-2" size={32} />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent flex justify-between items-end">
                <div>
                  <p className="font-sans text-white text-lg tracking-widest uppercase">{REEL_CONTENT[activeTab].title}</p>
                  <p className="font-serif text-brand-sage italic">Duration: {REEL_CONTENT[activeTab].duration}</p>
                </div>
            </div>
        </motion.div>

        {/* Image Slider */}
        <div className="relative">
           <h3 className="font-serif text-2xl text-brand-cream mb-6 flex items-center">
             <span className="w-8 h-px bg-brand-gold mr-4"/>
             {activeTab} Gallery
           </h3>
           
           <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-brand-gold/20 scrollbar-track-transparent hover:scrollbar-thumb-brand-gold/50 transition-colors">
             {GALLERY_DATA[activeTab].map((img, index) => (
               <motion.div
                 key={img.id}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.05 }}
                 className="flex-shrink-0 w-64 md:w-80 aspect-[4/3] relative group cursor-pointer snap-center"
                 onClick={() => handleImageClick(img.src)}
               >
                 <img 
                   src={img.src} 
                   alt={img.caption} 
                   className="w-full h-full object-cover rounded-sm border border-transparent group-hover:border-brand-gold/50 transition-all duration-300 grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-brand-gold" size={24} />
                 </div>
                 <div className="absolute bottom-0 left-0 bg-black/70 px-3 py-1 text-xs text-brand-sage font-sans uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.caption}
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Modal Header Controls */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex space-x-4">
                 {/* Minimal UI Category Toggles inside Modal */}
                 {categories.map(cat => (
                   <button 
                     key={cat}
                     onClick={() => setActiveTab(cat)}
                     className={`text-xs uppercase tracking-widest font-sans ${activeTab === cat ? 'text-brand-gold underline underline-offset-4' : 'text-brand-sage hover:text-white'}`}
                   >
                     {cat}
                   </button>
                 ))}
              </div>
              <button 
                onClick={() => setGalleryOpen(false)}
                className="text-white hover:text-brand-gold transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="flex-1 flex items-center justify-center relative p-4 md:p-12">
               <motion.img 
                 key={selectedImage} // Re-renders animation on image swap
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 src={selectedImage} 
                 className="max-h-full max-w-full object-contain shadow-2xl border border-white/5"
                 alt="Gallery Fullscreen"
               />
            </div>

            {/* Modal Footer Thumbnails */}
            <div className="h-24 bg-black/50 border-t border-white/10 flex items-center overflow-x-auto px-6 gap-2">
               {GALLERY_DATA[activeTab].map((img) => (
                 <button
                   key={img.id}
                   onClick={() => setSelectedImage(img.src)}
                   className={`flex-shrink-0 h-16 w-24 overflow-hidden border-2 transition-all ${selectedImage === img.src ? 'border-brand-gold opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                 >
                   <img src={img.src} className="w-full h-full object-cover" alt="thumbnail" />
                 </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reel;