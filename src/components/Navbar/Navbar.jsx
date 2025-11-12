import React from "react";
import "./Navbar.css";
import ReactEmoji from "react-emoji";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Library</h1>
      <div className="nav-links">
        <a href="">Popular 🔥</a>
        <a href="">Top Rated 🏆</a>
        <a href="">Upcoming 🥳</a>
      </div>
    </nav>
  );
};

export default Navbar;
