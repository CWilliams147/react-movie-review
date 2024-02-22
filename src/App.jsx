// app.jsx
import React, { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movieTitle) => {};

  return (
    <div>
      <h1>Movie Review Site</h1>
      <MovieForm onAddMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
