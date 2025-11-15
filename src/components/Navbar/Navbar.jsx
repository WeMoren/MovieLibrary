import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";
import ReactEmoji from "react-emoji";
const Navbar = ({ category, setCategory, theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h1>Movie Library</h1>
      <div className="nav-links">
        <a
          href="#"
          className={category === "popular" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setCategory("popular");
          }}
        >
          Popular 🔥
        </a>
        <a
          href=""
          className={category === "toprated" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setCategory("toprated");
          }}
        >
          Top Rated 🏆
        </a>
        <a
          href=""
          className={category === "upcoming" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setCategory("upcoming");
          }}
        >
          Upcoming 🥳
        </a>
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
};

export default Navbar;
