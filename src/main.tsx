import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Suppress React DevTools version warning for React 19
if (typeof window !== 'undefined') {
  // Catch unhandled errors from React DevTools
  const originalError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (
      typeof message === 'string' &&
      (message.includes('Invalid argument not valid semver') ||
        message.includes('react_devtools_backend'))
    ) {
      return true; // Suppress the error
    }
    if (originalError) {
      return originalError(message, source, lineno, colno, error);
    }
    return false;
  };

  // Also suppress console errors
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    if (
      args[0]?.includes?.('Invalid argument not valid semver') ||
      args[0]?.includes?.('react_devtools_backend')
    ) {
      return; // Suppress React DevTools version warnings
    }
    originalConsoleError.apply(console, args);
  };

  // Catch unhandled promise rejections from React DevTools
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason?.message?.includes?.('Invalid argument not valid semver') ||
      event.reason?.message?.includes?.('react_devtools_backend')
    ) {
      event.preventDefault(); // Suppress the error
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

