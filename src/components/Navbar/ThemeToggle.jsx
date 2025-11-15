import React from "react";
import "./ThemeToggle.css";
import { Sun, Moon } from "lucide-react";
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon size={24} color="#6c5ce7" />
      ) : (
        <Sun size={24} color="#f1c40f" />
      )}
    </button>
  );
};

export default ThemeToggle;
