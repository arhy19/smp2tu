import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header({ toggleMobileNav }) {
  return (
    <header className="header">

<div className="logo-container">
    <Link to="/" aria-label="Go to homepage">
      <img
        src="/images/logo.png"
        alt="Portal TU Logo"
        className="header-logo"
      />
    </Link>
    <span className="header-text">PORTAL TATA USAHA</span>
  </div>


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
