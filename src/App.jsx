import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';

const API_KEY = 'TU_API_KEY_AQUI'; // Reemplaza con tu API Key
const BASE_URL = 'https://api.themoviedb.org/3';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('popular');

  useEffect(() => {
    fetchMoviesByCategory(selectedCategory);
  }, [selectedCategory]);

  const fetchMoviesByCategory = async (category) => {
    setLoading(true);
    try {
      let endpoint = '';
      switch(category) {
        case 'popular':
          endpoint = '/movie/popular';
          break;
        case 'top_rated':
          endpoint = '/movie/top_rated';
          break;
        case 'upcoming':
          endpoint = '/movie/upcoming';
          break;
        case 'now_playing':
          endpoint = '/movie/now_playing';
          break;
        default:
          endpoint = '/movie/popular';
      }
      
      const response = await fetch(
        `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const searchMovies = async (query) => {
    if (!query.trim()) {
      fetchMoviesByCategory(selectedCategory);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=es-ES`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
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
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="no-results">No se encontraron resultados</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
