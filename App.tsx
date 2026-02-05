import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load InputPage to prevent main bundle crash if Chart.js fails
const InputPage = lazy(() => import('./pages/InputPage'));

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-slate-900 text-brand-gold font-serif">
    Loading Strategy Module...
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/input" 
          element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <InputPage />
              </Suspense>
            </ErrorBoundary>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;