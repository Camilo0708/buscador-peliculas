import React from 'react';
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-button" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="navbar-brand">
          <span className="brand-icon">🎬</span>
          <span className="brand-text">MovieFinder</span>
        </div>

        <div className="navbar-actions">
          <button className="nav-button">Iniciar Sesión</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
