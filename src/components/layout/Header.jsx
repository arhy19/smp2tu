import '@/styles/layout/header.css';
import '@/styles/layout/nav.css';
import '@/styles/layout/nav-mobile.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const [isAuth, setIsAuth] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Deteksi ukuran layar
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cek status login dari localStorage
  useEffect(() => {
    setIsAuth(localStorage.getItem('auth') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuth(false);
    navigate('/');
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const closeMenuOnClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', closeMenuOnClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', closeMenuOnClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="v4-header">
      {/* 🔷 Logo */}
      <Link to="/" className="logo-link">
        <div className="logo-container">
          <img src="/images/logo.png" alt="Logo" className="header-logo" />
          <div className="logo-text">
            PORTAL TATA USAHA<br />
            <span className="glow-text">UPTD SMP NEGERI 2 PAREPARE</span>
          </div>
        </div>
      </Link>

      {/* 🍔 Toggle Mobile */}
      {isMobile && (
        <button
          className={`toggle-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      )}

{/* 💻 Desktop Nav */}
{!isMobile && (
  <nav className="nav-inline">
    <Link to="/">Beranda</Link>
    <Link to="/publik">Data</Link>
    <Link to="/layanan">Layanan</Link>
    <Link to="/contact">Kontak</Link>
    <Link to="/about">Tentang</Link>

    {isAuth ? (
      <>
        <Link to="/admin/dashboard">Dashboard_Admin</Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </>
    ) : (
      <Link to="/login">Masuk</Link>
    )}
  </nav>
)}

{/* 📱 Mobile Nav */}
{isMobile && (
  <div className="nav-mobile-container" ref={menuRef}>
    <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
      <Link to="/" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
      <Link to="/publik" onClick={() => setIsMenuOpen(false)}>Data</Link>
      <Link to="/layanan" onClick={() => setIsMenuOpen(false)}>Layanan</Link>
      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
      <Link to="/about" onClick={() => setIsMenuOpen(false)}>Tentang</Link>

      {isAuth ? (
        <>
          <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard_Admin</Link>
          <button
            onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }}
            className="logout-btn"
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
      )}
    </nav>
  </div>
)}
    </header>
  );
}
