import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';

// Initialize Root
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Dynamic import allows catching syntax/import errors in App.tsx tree
import('./App')
  .then(({ default: App }) => {
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  })
  .catch((error) => {
    console.error("Critical Application Load Error:", error);
    rootElement.innerHTML = `
      <div style="color: #ef4444; padding: 40px; font-family: sans-serif; text-align: center; background: #0f172a; height: 100vh;">
        <h1 style="font-size: 24px; margin-bottom: 20px;">Unable to Load Application</h1>
        <p style="color: #94a3b8;">${error instanceof Error ? error.message : String(error)}</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #d4af37; color: #0f172a; border: none; font-weight: bold; cursor: pointer;">
          Retry
        </button>
      </div>
    `;
  });
