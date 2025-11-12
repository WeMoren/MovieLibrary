import React, { useEffect, useState } from "react";
import "./Playlist.css";
import MovieCard from "./MovieCard";
const apiKey = import.meta.env.VITE_TMDB_KEY;
const Playlist = () => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(apiKey);
      const data = await response.json();
      setMovies(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
      return;
    } else {
      setMinRating(rate);
      const filteredMovies = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilteredMovies(filteredMovies);
    }
  };

  return (
    <section className="play-list">
      <header className="playlist-header">
        <h2 className="play-list-heading">Most Popular 🔥</h2>

        <div className="movie-attribute">
          <ul className="movie-filter">
            <li
              className={
                minRating === 8 ? "filtered-item active" : "filtered-item"
              }
              onClick={() => handleFilter(8)}
            >
              8+ Star
            </li>
            <li className="filtered-item" onClick={() => handleFilter(7)}>
              7+ Star
            </li>
            <li className="filtered-item" onClick={() => handleFilter(6)}>
              6+ Star
            </li>
          </ul>

          <div className="star-sort-order">
            <select name="" id="" className="movie-sorting">
              <option value="">SortBy</option>
              <option value="">Date</option>
              <option value="">Rating</option>
            </select>

            <select name="" id="" className="movie-sorting">
              <option value="">Ascending</option>
              <option value="">Descending</option>
            </select>
          </div>
        </div>
      </header>

      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Playlist;
