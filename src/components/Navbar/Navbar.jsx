import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";
const Navbar = ({
  category,
  setCategory,
  theme,
  toggleTheme,
  search,
  setSearch,
}) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      navigate(`/search/${search}`);
      setQuery("");
    }
  };

  return (
    <nav className="navbar">
      <h1>Movie Library</h1>
      <div className="nav-links">
        <a
          href="/"
          className={category === "popular" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setCategory("popular");
          }}
        >
          Popular 🔥
        </a>
        <a
          href="/toprated"
          className={category === "toprated" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setCategory("toprated");
          }}
        >
          Top Rated 🏆
        </a>
        <a
          href="/upcoming"
          className={category === "upcoming" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setCategory("upcoming");
          }}
        >
          Upcoming 🥳
        </a>
      </div>
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
};

export default Navbar;
