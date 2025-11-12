import React from "react";
import "./Playlist.css";
import MovieCard from "./MovieCard";
const Playlist = () => {
  return (
    <section className="play-list">
      <header className="playlist-header">
        <h2 className="play-list-heading">Most Popular 🔥</h2>

        <div className="movie-attribute">
          <ul className="movie-filter">
            <li className="filtered-item active">8+ Star</li>
            <li className="filtered-item">7+ Star</li>
            <li className="filtered-item">6+ Star</li>
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
        <MovieCard />
      </div>
    </section>
  );
};

export default Playlist;
