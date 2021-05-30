import Search from "./components/Search";
import Welcome from "./components/Welcome";
import Movie from "./components/Movie";

import React, { useState } from "react";

import "./App.css";

function App() {
  const [movie, setMovie] = useState(null);
  return (
    <div id="movieApp" className="container">
      <div className="row">
        <div className="col-md-4">
          <Search setMovie={setMovie} />
        </div>
        <div className="col-md-8">
          {!movie && <Welcome />}
          {movie && <Movie movie={movie} />}
        </div>
      </div>
    </div>
  );
}

export default App;
