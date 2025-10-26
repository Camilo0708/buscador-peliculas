import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MovieFinder</h3>
          <p>Tu plataforma para descubrir películas</p>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Películas</a></li>
            <li><a href="#">Acerca de</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@moviefinder.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 MovieFinder. Proyecto Académico - Ingeniería de Sistemas</p>
        <p>Datos proporcionados por TMDB</p>
      </div>
    </footer>
  );
}

export default Footer;
