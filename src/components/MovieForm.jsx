import React, { useState } from "react";
import MovieInfo from "./MovieInfo";
import ReviewForm from "./ReviewForm";

function MovieForm() {
  const [movie, setMovie] = useState("");
  const [movieInfo, setMovieInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${movie}&apikey=71c43158`
      );
      const data = await response.json();
      setMovieInfo(data);
      setMovie("");
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movie}
          onChange={handleChange}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      {movieInfo && (
        <div>
          <MovieInfo movieInfo={movieInfo} />
          <ReviewForm />
        </div>
      )}
    </div>
  );
}

export default MovieForm;
