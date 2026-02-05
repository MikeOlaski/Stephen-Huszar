import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket } from 'lucide-react';

const EVENTS = [
  { id: 1, name: 'Christmas Con 2024', location: 'Edison, NJ', date: 'Dec 8-10', status: 'Confirmed' },
  { id: 2, name: 'RomaDrama Live', location: 'Nashville, TN', date: 'June 24-26', status: 'Confirmed' },
  { id: 3, name: 'Fan Expo Canada', location: 'Toronto, ON', date: 'August 22', status: 'Pending' },
];

const Appearances: React.FC = () => {
  return (
    <section id="appearances" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-4">Appearances</h2>
          <div className="w-24 h-0.5 bg-brand-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-dark p-8 border border-brand-sage/10 hover:border-brand-gold/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Ticket size={64} className="text-brand-gold" />
              </div>
              
              <div className="flex items-center space-x-2 text-brand-gold mb-4 text-sm font-sans tracking-widest uppercase">
                <Calendar size={14} />
                <span>{event.date}</span>
              </div>
              
              <h3 className="font-serif text-2xl text-brand-cream mb-2">{event.name}</h3>
              
              <div className="flex items-center space-x-2 text-brand-sage mb-8">
                <MapPin size={16} />
                <span className="font-sans text-sm">{event.location}</span>
              </div>

              <button className="w-full py-3 border border-brand-gold/30 text-brand-gold font-sans text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-colors">
                {event.status === 'Confirmed' ? 'Get Tickets' : 'Stay Tuned'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appearances;