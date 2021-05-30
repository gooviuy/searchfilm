import axios from "axios";
import React, { useState } from "react";

const Search = ({ setMovie }) => {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://private.omdbapi.com/?apikey=bef9c583&t=" + movieName)
      .then((result) => {
        setMovie(result.data);
      });
  };
  return (
    <div id="search" className="box">
      <h2>Pelicula</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="movie">
            Titulo de la pelicula
          </label>
          <input
            className="form-control"
            type="text"
            id="movie"
            placeholder="Escribe un titulo"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Buscar Pelicula
        </button>
      </form>
    </div>
  );
};
export default Search;
