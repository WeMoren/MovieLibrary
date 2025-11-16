import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // We keep Router for future use (e.g., SearchResults page)
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PlayList from "./components/PlayList/Playlist";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Category state to track Popular, Top Rated, Upcoming
  const [category, setCategory] = useState("popular");

  // Search state to track search input
  const [search, setSearch] = useState("");

  // Persist theme changes to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        {/* Navbar receives category, setCategory, search state and theme */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />

        {/* Single Playlist controlled by category and search state */}
        <PlayList category={category} search={search} />

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
