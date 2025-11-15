import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";
import ReactEmoji from "react-emoji";
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h1>Movie Library</h1>
      <div className="nav-links">
        <a href="">Popular 🔥</a>
        <a href="">Top Rated 🏆</a>
        <a href="">Upcoming 🥳</a>
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
};

export default Navbar;
