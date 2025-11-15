import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PlayList from "./components/PlayList/Playlist";
import MovieCard from "./components/PlayList/MovieCard";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [category, setCategory] = useState("popular");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        category={category}
        setCategory={setCategory}
      />
      <PlayList category={category} />
      {/* <MovieCard /> */}
    </div>
  );
};

export default App;
