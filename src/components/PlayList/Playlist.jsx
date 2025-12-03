import React, { useEffect, useState } from "react";
import lodash from "lodash";
import "./Playlist.css";
import MovieCard from "./MovieCard";
const apiBaseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const Playlist = ({ category, search }) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sort, setSort] = useState({ by: "default", order: "asc" });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let endpoint = category;
        if (category === "toprated") {
          endpoint = "top_rated";
        }
        let url = apiBaseUrl.replace("popular", endpoint);
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        setFilteredMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [category]);

  useEffect(() => {
    if (sort.by !== "by") {
      const sortedMovies = lodash.orderBy(
        filteredMovies,
        [sort.by],
        [sort.order]
      );
      setFilteredMovies(sortedMovies);
    }
  }, [sort]);

  useEffect(() => {
    if (!search || !search.trim()) {
      setFilteredMovies(movies);
      return;
    }

    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(results);
  }, [search, movies]);

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

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="play-list">
      <header className="playlist-header">
        <h2 className="play-list-heading">
          {category === "popular"
            ? " Popular 🔥"
            : category === "toprated"
            ? "Top Rated 🏆"
            : "Upcoming 🥳"}
        </h2>

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
            <li
              className={
                minRating === 7 ? "filtered-item active" : "filtered-item"
              }
              onClick={() => handleFilter(7)}
            >
              7+ Star
            </li>
            <li
              className={
                minRating === 6 ? "filtered-item active" : "filtered-item"
              }
              onClick={() => handleFilter(6)}
            >
              6+ Star
            </li>
          </ul>

          <div className="star-sort-order">
            <select
              name="by"
              id=""
              onChange={handleSort}
              value={sort.by}
              className="movie-sorting"
            >
              <option value="default">SortBy</option>
              <option value="release_date">Date</option>
              <option value="vote_average">Rating</option>
            </select>

            <select
              name="order"
              id=""
              onChange={handleSort}
              value={sort.order}
              className="movie-sorting"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
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
