import React, { useEffect, useState, useRef } from 'react'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setNavOpen(false); };
    const onResize = () => { if (window.innerWidth > 825) setNavOpen(false); };

    const onScroll = () => {
      const currentY = window.scrollY;
      // Scroll ke bawah > 80px → sembunyikan navbar
      if (currentY > lastScrollY.current && currentY > 80) {
        setNavHidden(true);
        setNavOpen(false); // tutup mobile menu saat scroll
      } else {
        setNavHidden(false);
      }
      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navClass = [
    'nav',
    scrolled ? 'nav-scrolled' : '',
    navHidden ? 'nav-hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <header>
      {/* Overlay saat mobile menu terbuka */}
      {navOpen && (
        <div
          className="nav-overlay"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className={navClass}>
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
        </div>

        <nav className={navOpen ? 'nav-active' : ''} aria-label="Primary">
          <div className="nav-mobile-header">
            <span className="nav-mobile-title">Menu</span>
          </div>
          <ul>
            <li><a href="#about"        onClick={() => setNavOpen(false)}>About Me</a></li>
            <li><a href="#services"     onClick={() => setNavOpen(false)}>Services</a></li>
            <li><a href="#portfolios"   onClick={() => setNavOpen(false)}>Portfolio</a></li>
            <li><a href="#certificates" onClick={() => setNavOpen(false)}>Certificates</a></li>
            <li><a href="#skills"       onClick={() => setNavOpen(false)}>Skills</a></li>
            <li><a href="#contact"      onClick={() => setNavOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <button
          className={`burger ${navOpen ? 'toggle-burger' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(v => !v)}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </button>
      </div>
    </header>
  )
}
