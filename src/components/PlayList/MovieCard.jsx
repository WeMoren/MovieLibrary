import React from "react";
import "./MovieCard.css";
const MovieCard = () => {
  return (
    <a href="" className="movie-card">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
        alt="Movie Poster"
        className="movie-poster"
      />

      <div className="movie-details">
        <h3 className="movie-title">Movie Name</h3>
        <div className="movie-date-rate">
          <span className="movie-release-date">20-10-2024</span>
          <span className="movie-rating">⭐ 8.5</span>
        </div>
        <p className="movie-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eaque.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
