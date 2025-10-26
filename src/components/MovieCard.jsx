import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Sin+Imagen';

  const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="movie-card">
      <div className="movie-poster-wrapper">
        <img src={imageUrl} alt={movie.title} className="movie-poster" />
        <div className="movie-rating-badge">{rating}</div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{year}</p>
        <p className="movie-overview">
          {movie.overview 
            ? movie.overview.substring(0, 100) + '...' 
            : 'Sin descripción disponible'}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
