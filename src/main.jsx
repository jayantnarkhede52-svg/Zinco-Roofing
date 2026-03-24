import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// SSG Polyfills for JSDOM
if (typeof window !== 'undefined') {
  if (!window.IntersectionObserver) {
    window.IntersectionObserver = class IntersectionObserver {
      constructor() {}
      observe() { return null; }
      unobserve() { return null; }
      disconnect() { return null; }
    };
  }

  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    });
  }

  if (!window.ResizeObserver) {
    window.ResizeObserver = class ResizeObserver {
      constructor() {}
      observe() { return null; }
      unobserve() { return null; }
      disconnect() { return null; }
    };
  }
}

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
