import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function getFocusable(node) {
  if (!node) return [];
  return Array.from(node.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )).filter(el => !el.disabled && !el.getAttribute('aria-hidden'));
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const mainRef = useRef(null);
  const location = useLocation();

  // Close menu & focus main on route change
  useEffect(() => {
    setMenuOpen(false);
    const t = setTimeout(() => mainRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // Focus trap & ESC for mobile drawer
  useEffect(() => {
    if (!menuOpen) return;
    const focusables = getFocusable(menuRef.current);
    focusables[0]?.focus();

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        btnRef.current?.focus();
      }
      if (e.key === 'Tab' && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Header */}
      <header className="site-header">
        <div className="container header-grid">
          <NavLink to="/" className="brand">Thrive</NavLink>

          {/* Desktop nav */}
          <nav className="nav-desktop" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/forecast">Forecast</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/tracker">Tracker</NavLink>
            <NavLink to="/proposal">Proposal</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            ref={btnRef}
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰ Menu
          </button>
        </div>
      </header>

      {/* Mobile drawer menu */}
      {menuOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => { setMenuOpen(false); btnRef.current?.focus(); }}
        >
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="drawer-panel"
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-header">
              <span className="brand">Thrive</span>
              <button
                className="close-button"
                onClick={() => { setMenuOpen(false); btnRef.current?.focus(); }}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="drawer-links" aria-label="Primary">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/forecast">Forecast</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/tracker">Tracker</NavLink>
              <NavLink to="/proposal">Proposal</NavLink>
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <main id="main-content" tabIndex="-1" ref={mainRef} className="site-main container">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Thrive</small>
        </div>
      </footer>
    </>
  );
}
