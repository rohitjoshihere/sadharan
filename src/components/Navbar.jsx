import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src="/logo.png" alt="SADHARAN" className="navbar-logo-img" />
                    </Link>
                </div>

                <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
                    <NavLink to="/shop" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>Shop</NavLink>
                    <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
                    <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact</NavLink>
                </div>

                <div className="navbar-icons">
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
