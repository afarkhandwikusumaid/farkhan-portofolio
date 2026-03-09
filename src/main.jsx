import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/style.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Scroll reveal animations
function initReveal() {

  // Attach reveal classes to common blocks
  const els = Array.from(document.querySelectorAll('section, .service, .portfolio, .contact-item'));
  els.forEach((el, i) => {
    el.classList.add('reveal', 'reveal-up');
    el.style.transitionDelay = `${Math.min(i * 60, 540)}ms`;
  });

  // Observe
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  els.forEach(el => io.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal, { once: true });
} else {
  initReveal();
}
