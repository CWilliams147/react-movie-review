import React, { useState } from "react";

const MovieForm = ({ onAddMovie }) => {
  const [movie, setMovieTitle] = useState("");

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://www.omdbapi.com/?t=moana&apikey=71c43158"
    const response = await fetch(url).then((response) => response.json())
    console.log(response);
    setMovieTitle(response);
    );

    const data = await response.json();
    onAddMovie(data);
    setMovieTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a movie title:
          <input type="text" value={movie} onChange={handleChange} id="movie" />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
