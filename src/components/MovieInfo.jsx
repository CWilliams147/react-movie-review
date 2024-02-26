import React from "react";

function MovieInfo({ movieInfo }) {
  return (
    <div className="card">
      <img src={movieInfo.Poster} alt="Movie Poster" />
      <h2>{movieInfo.Title}</h2>
      <p>Release Year: {movieInfo.Year}</p>
      <p>{movieInfo.Plot}</p>
      <h3>Ratings:</h3>
      <ul>
        {movieInfo.Ratings.map((rating, index) => (
          <li key={index}>
            {rating.Source}: {rating.Value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieInfo;
