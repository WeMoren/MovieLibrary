import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  const apiKey = import.meta.env.VITE_TMDB_KEY;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Search error:", error);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Results for: {query}</h2>

      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>No results found!</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
