import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, onClose, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchQuery('');
      onClose();
    }
  };

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menú</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="sidebar-search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar película..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sidebar-search-input"
            />
            <button type="submit" className="sidebar-search-button">
              Buscar
            </button>
          </form>
        </div>

        <div className="sidebar-info-section">
          <h3>Información</h3>
          <div className="info-card">
            <p><strong>Proyecto:</strong> Buscador de Películas</p>
            <p><strong>Alumno:</strong> Camilo Arambula</p>
            <p><strong>Programa:</strong> Ingeniería de Sistemas</p>
          </div>
        </div>

        <div className="sidebar-features">
          <h3>Características</h3>
          <ul>
            <li>Busca películas, series y episodios</li>
            <li>Información completa de cada título</li>
            <li>Interfaz moderna y responsive</li>
            <li>Datos en tiempo real desde OMDb</li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <p>© 2025 MovieFinder</p>
          <p className="api-info">Powered by OMDb API</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
