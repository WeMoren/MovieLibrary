import React from "react";
import "./Footer.css";
import logo from "../../assets/WeMoren-badge.png";
const Footer = () => {
  const year = new Date().getFullYear();
  const dataUrl = "https://www.themoviedb.org/";
  const githubUrl = "https://www.github.com/WeMoren";
  const altText = "WeMoren logo";
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt={altText} />
      <p>© {year} MovieLibrary. All rights reserved.</p>
      <p>
        Developed by{" "}
        <strong>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            WeMoren.
          </a>
        </strong>
      </p>
      <p>
        Movie Data provided by
        <strong>
          <a href={dataUrl} target="_blank" rel="noopener noreferrer">
            TMDB...
          </a>
        </strong>
      </p>
      <p>This App not endorsed by TMDB.</p>
    </footer>
  );
};

export default Footer;
