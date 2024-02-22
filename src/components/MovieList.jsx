// MovieList.js
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  if (!movies || !movies.length) {
    return <div>No movies to display</div>;
  }

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
