import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header({ toggleMobileNav }) {
  return (
    <header className="header">
      <Link to="/" className="logo-link" aria-label="Go to homepage">
        <div className="logo-container">
          <img
            src="/images/logo.png"
            alt="Portal TU Logo"
            className="header-logo"
          />
          <span className="header-text">PORTAL TATA USAHA</span>
        </div>
      </Link>

      {/* Toggle hanya muncul di mode mobile */}
      <button
        className="menu-toggle"
        onClick={toggleMobileNav}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </header>
  );
}
