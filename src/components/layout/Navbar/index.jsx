import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-azure ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="العودة إلى الصفحة الرئيسية">
          <img src="/logo_svg.svg" alt="شعار ابن المفلحي" className="logo-image" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            الرئيسية
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            من نحن
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            خدماتنا
          </NavLink>
          <NavLink to="/destinations" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            الوجهات
          </NavLink>
          <NavLink to="/offers" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            العروض
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            معرض الصور
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            اتصل بنا
          </NavLink>
        </div>

        {/* Action Button */}
        <div className="navbar-action desktop-only">
          <Link to="/contact" className="btn btn-primary btn-sm">
            <FiPhoneCall /> اتصل بنا
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-links">
            <Link to="/" onClick={() => setIsOpen(false)}>الرئيسية</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>من نحن</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>خدماتنا</Link>
            <Link to="/destinations" onClick={() => setIsOpen(false)}>الوجهات</Link>
            <Link to="/offers" onClick={() => setIsOpen(false)}>العروض</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>معرض الصور</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>اتصل بنا</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
