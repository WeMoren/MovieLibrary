import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PlayList from "./components/PlayList/Playlist";
import MovieCard from "./components/PlayList/MovieCard";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <PlayList />
      {/* <MovieCard /> */}
    </div>
  );
};

export default App;
