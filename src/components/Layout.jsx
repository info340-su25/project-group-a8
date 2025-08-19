import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const hamburgerButtonRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                hamburgerButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            const focusableElements = mobileMenuRef.current?.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements && focusableElements.length > 0) {
                focusableElements[0].focus();
                
                const handleTabKey = (event) => {
                    if (event.key === 'Tab') {
                        const firstElement = focusableElements[0];
                        const lastElement = focusableElements[focusableElements.length - 1];
                        
                        if (event.shiftKey && document.activeElement === firstElement) {
                            event.preventDefault();
                            lastElement.focus();
                        } else if (!event.shiftKey && document.activeElement === lastElement) {
                            event.preventDefault();
                            firstElement.focus();
                        }
                    }
                };
                
                document.addEventListener('keydown', handleTabKey);
                return () => document.removeEventListener('keydown', handleTabKey);
            }
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        hamburgerButtonRef.current?.focus();
    };

    return (
        <div className="app-layout">
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            {/* Header */}
            <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom position-relative">
                <div className="d-flex align-items-center">
                    <Link to="/">
                        <img src="img/unfold_logo.png" alt="Unfold Logo" height="60" />
                    </Link>
                    <span className="visually-hidden">Navigate to home</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="d-none d-md-flex gap-4" aria-label="Main navigation">
                    <Link to="/tracker" className="nav-link">Daily Check-In</Link>
                    <Link to="/joy" className="nav-link">Joy Bubble</Link>
                    <Link to="/forecast" className="nav-link">Forecast</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </nav>

                {/* Mobile Hamburger Button */}
                <button 
                    ref={hamburgerButtonRef}
                    className="btn menu-toggle d-md-none"
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                    onClick={toggleMobileMenu}
                >
                    <span className={`hamburger-icon ${isMobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div 
                        className="mobile-menu-overlay"
                        onClick={closeMobileMenu}
                        aria-hidden="true"
                    />
                )}

                {/* Mobile Menu */}
                <nav 
                    ref={mobileMenuRef}
                    id="mobile-menu"
                    className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
                    aria-label="Mobile navigation"
                    aria-hidden={!isMobileMenuOpen}
                >
                    <div className="mobile-menu-header">
                        <h2 className="text-cream">Navigation</h2>
                        <button
                            className="btn btn-close-menu"
                            onClick={closeMobileMenu}
                            aria-label="Close navigation menu"
                        >
                            ✕
                        </button>
                    </div>
                    
                    <ul className="mobile-menu-list">
                        <li>
                            <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>
                                🏠 Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/tracker" className="mobile-menu-link" onClick={closeMobileMenu}>
                                📝 Daily Check-In
                            </Link>
                        </li>
                        <li>
                            <Link to="/joy" className="mobile-menu-link" onClick={closeMobileMenu}>
                                💭 Joy Bubble
                            </Link>
                        </li>
                        <li>
                            <Link to="/forecast" className="mobile-menu-link" onClick={closeMobileMenu}>
                                🌤️ Forecast
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="mobile-menu-link" onClick={closeMobileMenu}>
                                ℹ️ About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main id="main-content" className="main-content">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-dark text-light py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Unfold</h4>
                            <p className="mb-0">A digital wellness garden for students</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="mb-0">&copy; 2025 Unfold | Group A8 | University of Washington</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}