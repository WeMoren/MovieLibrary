import React from "react";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="movie-card"
      target="_blank"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Movie Poster"
        className="movie-poster"
      />

      <div className="movie-details">
        <h3 className="movie-title">{movie.original_title}</h3>
        <div className="movie-date-rate">
          <span className="movie-release-date">{movie.release_date}</span>
          <span className="movie-rating">{movie.vote_average} ⭐</span>
        </div>
        <p className="movie-description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
