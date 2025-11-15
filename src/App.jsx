import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PlayList from "./components/PlayList/Playlist";
import MovieCard from "./components/PlayList/MovieCard";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <PlayList />
      {/* <MovieCard /> */}
    </div>
  );
};

export default App;
