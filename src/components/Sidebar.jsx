import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, onClose, onCategoryChange, selectedCategory }) {
  const categories = [
    { id: 'popular', label: 'Populares', icon: '🔥' },
    { id: 'top_rated', label: 'Mejor Calificadas', icon: '⭐' },
    { id: 'upcoming', label: 'Próximos Estrenos', icon: '📅' },
    { id: 'now_playing', label: 'En Cartelera', icon: '🎬' }
  ];

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Categorías</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <nav className="sidebar-nav">
          {categories.map(category => (
            <button
              key={category.id}
              className={`sidebar-item ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="sidebar-icon">{category.icon}</span>
              <span className="sidebar-label">{category.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
