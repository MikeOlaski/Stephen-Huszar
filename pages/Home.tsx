import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Reel from '../components/Reel';
import Appearances from '../components/Appearances';
import Availability from '../components/Availability';
import Work from '../components/Work';
import NowPlaying from '../components/NowPlaying';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';

// Lazy load VirtualChase
const VirtualChase = lazy(() => import('../components/VirtualChase'));

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Simulate a high-end loading sequence
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-brand-dark flex items-center justify-center flex-col z-50">
        <h1 className="font-serif text-5xl md:text-6xl text-brand-gold animate-pulse tracking-widest uppercase text-center">
          Stephen Huszar
        </h1>
        <div className="w-12 h-1 bg-brand-sage mt-4 animate-bounce" />
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen text-brand-cream selection:bg-brand-gold selection:text-brand-dark scroll-smooth">
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Reel />
        <Appearances />
        <Availability onOpenChat={() => setIsChatOpen(true)} />
        <Work />
        <NowPlaying />
        <Contact />
      </main>

      {/* Floating AI Interaction */}
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <VirtualChase isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </Suspense>
      </ErrorBoundary>
      
      <Footer />
    </div>
  );
};

export default Home;