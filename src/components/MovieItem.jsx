import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-details">
        <h3>{movie.Title}</h3>
        <p>Release Year: {movie.Year}</p>
        <p>Plot: {movie.Plot}</p>
        <p>Ratings:</p>
        <ul>
          {movie.Ratings.map((rating, index) => (
            <li key={index}>
              {rating.Source}: {rating.Value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieItem;
