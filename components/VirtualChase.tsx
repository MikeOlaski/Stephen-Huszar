import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { getChaseResponse } from '../services/geminiService';
import { ChatMessage, ChatState } from '../types';

interface VirtualChaseProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const VirtualChase: React.FC<VirtualChaseProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: 'Hey there! It’s Stephen. Need advice on wellness, movies, or finding your center? Ask away!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, isExpanded]);

  const handleSend = async () => {
    if (!inputValue.trim() || chatState === ChatState.THINKING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setChatState(ChatState.THINKING);

    const responseText = await getChaseResponse(userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, modelMsg]);
    setChatState(ChatState.IDLE);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-40 bg-brand-gold text-brand-dark p-4 rounded-full shadow-2xl border-2 border-brand-cream"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
        transition={{ delay: 0.2 }}
        style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
      >
        <MessageCircle size={32} />
        <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full animate-ping" />
      </motion.button>

      {/* Chat Interface Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { type: "spring", damping: 25, stiffness: 300 }
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={`fixed z-50 bg-brand-charcoal shadow-2xl overflow-hidden border border-brand-gold/30 flex flex-col transition-all duration-300 ease-in-out ${
              isExpanded 
                ? 'inset-0 w-full h-full rounded-none' 
                : 'bottom-24 right-6 w-full max-w-sm md:w-96 h-[500px] rounded-2xl'
            }`}
          >
            {/* Header */}
            <div className="bg-brand-dark p-4 flex items-center justify-between border-b border-brand-gold/20 shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src="https://picsum.photos/seed/chaseheadshot/100/100" className="w-10 h-10 rounded-full border-2 border-brand-gold object-cover" alt="Chase AI" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-brand-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-brand-cream font-bold leading-tight">Stephen Huszar AI</h3>
                  <p className="text-[10px] text-brand-gold flex items-center gap-1 uppercase tracking-wider">
                    <Sparkles size={10} /> Digital Twin
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                 <a 
                   href="https://app.fanfix.io/@stephenhuszar" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hidden sm:flex items-center space-x-1 bg-brand-gold hover:bg-white text-brand-dark px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors mr-1"
                 >
                   <span>Access Live</span>
                   <ExternalLink size={10} />
                 </a>

                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="text-brand-sage hover:text-brand-cream transition-colors p-1.5 hover:bg-brand-sage/10 rounded-md"
                  title={isExpanded ? "Minimize" : "Maximize"}
                >
                  {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-brand-sage hover:text-brand-red transition-colors p-1.5 hover:bg-brand-red/10 rounded-md"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Mobile-only CTA banner */}
            <div className="sm:hidden bg-brand-gold/10 p-2 flex justify-center border-b border-brand-gold/10 shrink-0">
               <a 
                 href="https://app.fanfix.io/@stephenhuszar" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
               >
                 <span>Access Stephen Live</span>
                 <ExternalLink size={12} />
               </a>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-charcoal/50 scrollbar-thin scrollbar-thumb-brand-gold/20">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-brand-gold text-brand-dark rounded-br-none font-medium shadow-md'
                        : 'bg-brand-dark text-brand-cream border border-brand-sage/20 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {chatState === ChatState.THINKING && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-brand-dark p-3 rounded-2xl rounded-bl-none border border-brand-sage/20">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-sage rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-brand-sage rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-brand-sage rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-brand-dark border-t border-brand-gold/20 shrink-0">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-brand-charcoal text-brand-cream px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-brand-gold border border-brand-sage/10 placeholder-brand-sage/50 text-sm shadow-inner"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || chatState === ChatState.THINKING}
                  className="bg-brand-gold text-brand-dark p-3 rounded-full hover:bg-white hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-lg"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualChase;