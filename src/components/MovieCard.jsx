import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onClick }) {
  const imageUrl = movie.Poster && movie.Poster !== 'N/A'
    ? movie.Poster
    : 'https://via.placeholder.com/300x450?text=Sin+Imagen';

  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-poster-wrapper">
        <img src={imageUrl} alt={movie.Title} className="movie-poster" />
        <div className="movie-year-badge">{movie.Year}</div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-type">{movie.Type.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default MovieCard;
