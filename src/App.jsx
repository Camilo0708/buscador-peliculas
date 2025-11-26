import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import MovieModal from './components/MovieModal.jsx';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('movie');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchInitialMovies();
  }, []);

  const fetchInitialMovies = async () => {
    setLoading(true);
    try {
      const queries = ['the', 'a', 'movie'];
      const randomQuery = queries[Math.floor(Math.random() * queries.length)];
      
      const response = await fetch(
        `${BASE_URL}?s=${randomQuery}&type=movie&apikey=${API_KEY}&page=1`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };



  const searchMovies = async (query) => {
    if (!query.trim()) {
      fetchInitialMovies();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?s=${encodeURIComponent(query)}&type=${selectedType}&apikey=${API_KEY}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };


  return (
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          onSearch={searchMovies}
        />
        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="search-section">
            <h1>Buscador de Películas</h1>
            <SearchBar onSearch={searchMovies} />
          </div>

          <div className="movies-grid">
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>Cargando películas...</p>
              </div>
            ) : movies.length > 0 ? (
              movies.map(movie => (
                <MovieCard 
                  key={movie.imdbID} 
                  movie={movie}
                  onClick={() => setSelectedMovie(movie)}
                />
              ))
            ) : (
              <p className="no-results">No se encontraron resultados</p>
            )}
          </div>
        </main>

        {selectedMovie && (
          <MovieModal 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)}
            apiKey={API_KEY}
          />
        )}

        <Footer />
      </div>
    );

}

export default App;
