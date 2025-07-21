// src/components/Header.jsx

import '@/styles/layout/header.css';
import '@/styles/layout/nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const [isAuth, setIsAuth] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Cek status login
  useEffect(() => {
    setIsAuth(localStorage.getItem('auth') === 'true');
  }, []);

  // Resize handler
  useEffect(() => {
    const updateView = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  // Lock scroll saat menu aktif
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // Tutup menu saat klik di luar area
  const handleClickOutside = useCallback((e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const handleLogout = useCallback(() => {
    localStorage.removeItem('auth');
    setIsAuth(false);
    setIsMenuOpen(false);
    navigate('/');
  }, [navigate]);

  return (
    <div className="fixed-top-section">
      <header className="v4-header">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <img src="/images/logo.png" alt="Logo" className="header-logo" />
            <div className="logo-text">
              PORTAL TATA USAHA
              <span className="glow-text">UPTD SMP NEGERI 2 PAREPARE</span>
            </div>
          </div>
        </Link>

        {isMobile ? (
          <button
            className={`toggle-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Sidebar"
            aria-controls="mobile-sidebar"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        ) : (
          <nav className="nav-inline">
            <NavLinks isAuth={isAuth} handleLogout={handleLogout} />
          </nav>
        )}
      </header>

      {/* Sidebar sebagai menu mobile */}
      {isMobile && (
        <div
          id="mobile-sidebar"
          ref={menuRef}
          className={`nav-mobile-container ${isMenuOpen ? 'active' : ''}`}
        >
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <NavLinks
              isAuth={isAuth}
              handleLogout={handleLogout}
              onClick={closeMenu}
            />
          </nav>
        </div>
      )}
    </div>
  );
}

function NavLinks({ isAuth, handleLogout, onClick }) {
  const handleClick = (callback) => {
    callback();
    onClick?.();
  };

  return (
    <>
      <Link to="/" onClick={onClick}>Beranda</Link>
      <Link to="/publik" onClick={onClick}>Data</Link>
      <Link to="/layanan" onClick={onClick}>Layanan</Link>
      <Link to="/contact" onClick={onClick}>Kontak</Link>
      <Link to="/about" onClick={onClick}>Tentang</Link>
      {isAuth ? (
        <>
          <Link to="/admin/dashboard" onClick={onClick}>Dashboard_Admin</Link>
          <button className="logout-btn" onClick={() => handleClick(handleLogout)}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" onClick={onClick}>Login</Link>
      )}
    </>
  );
}
