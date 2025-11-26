import React, { useState, useEffect } from 'react';
import './MovieModal.css';

function MovieModal({ movie, onClose, apiKey }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetails();
  }, [movie.imdbID]);

  const fetchMovieDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
      );
      const data = await response.json();
      if (data.Response === 'True') {
        setDetails(data);
      }
    } catch (error) {
      console.error('Error fetching details:', error);
    }
    setLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {loading ? (
          <div className="modal-loading">
            <div className="spinner"></div>
          </div>
        ) : details ? (
          <div className="modal-body">
            <div className="modal-poster">
              <img 
                src={details.Poster !== 'N/A' ? details.Poster : 'https://via.placeholder.com/300x450?text=Sin+Imagen'} 
                alt={details.Title} 
              />
            </div>
            
            <div className="modal-info">
              <h2>{details.Title}</h2>
              
              <div className="modal-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Tipo:</span>
                  <span className="detail-value">{details.Type}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Año:</span>
                  <span className="detail-value">{details.Year}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Clasificación:</span>
                  <span className="detail-value">{details.Rated}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duración:</span>
                  <span className="detail-value">{details.Runtime}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Género:</span>
                  <span className="detail-value">{details.Genre}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Calificación IMDb:</span>
                  <span className="detail-value">{details.imdbRating}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>Director</h3>
                <p>{details.Director}</p>
              </div>

              <div className="detail-section">
                <h3>Actores</h3>
                <p>{details.Actors}</p>
              </div>

              <div className="detail-section">
                <h3>Sinopsis</h3>
                <p>{details.Plot}</p>
              </div>

              <div className="detail-section">
                <h3>Información Adicional</h3>
                <div className="info-row">
                  <span>IMDb ID:</span>
                  <span className="imdb-id">{details.imdbID}</span>
                </div>
                <div className="info-row">
                  <span>Votos IMDb:</span>
                  <span>{details.imdbVotes}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="modal-error">Error cargando detalles</p>
        )}
      </div>
    </div>
  );
}

export default MovieModal;
