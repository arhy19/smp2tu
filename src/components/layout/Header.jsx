import '@/styles/layout/header.css';
import '@/styles/layout/nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const [isAuth, setIsAuth] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
      if (!mobileView) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsAuth(localStorage.getItem('auth') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuth(false);
    navigate('/');
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const closeMenu = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener('mousedown', closeMenu);
    return () => document.removeEventListener('mousedown', closeMenu);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header className="v4-header">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <img src="/images/logo.png" alt="Logo" className="header-logo" />
            <div className="logo-text">
              PORTAL TATA USAHA<br />
              <span className="glow-text">UPTD SMP NEGERI 2 PAREPARE</span>
            </div>
          </div>
        </Link>

        {isMobile && (
          <button
            className={`toggle-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        )}

        {!isMobile && (
          <nav className="nav-inline">
            <NavLinks isAuth={isAuth} handleLogout={handleLogout} />
          </nav>
        )}
      </header>

      {/* Mobile Nav Outside Header for Fullscreen */}
      {isMobile && (
        <div className={`nav-mobile-container ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <nav id="mobile-nav" className="nav-links active">
        <NavLinks isAuth={isAuth} handleLogout={handleLogout} onClick={() => setIsMenuOpen(false)} />
        </nav>
        </div>

      )}
    </>
  );
}

function NavLinks({ isAuth, handleLogout, onClick }) {
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
          <button className="logout-btn" onClick={() => { handleLogout(); onClick?.(); }}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" onClick={onClick}>Login</Link>
      )}
    </>
  );
}
