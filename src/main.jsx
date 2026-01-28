import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContentProvider } from './context/ContentContext'
import './index.css'
import App from './App.jsx'

// Register Service Worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (import.meta.env.DEV) {
          console.log('SW registered: ', registration);
        }
      })
      .catch((registrationError) => {
        if (import.meta.env.DEV) {
          console.error('SW registration failed: ', registrationError);
        }
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </StrictMode>,
)
