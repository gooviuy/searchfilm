import React from "react";
function Welcome() {
  return (
    <div id="welcome" className="box">
      {" "}
      <h2>Buscador de películas</h2>{" "}
      <p>
        {" "}
        Escribí el título de una película (en inglés) y obtené información sobre
        la misma.
      </p>{" "}
      <p>
        {" "}
        Este servicio funciona gracias a la API de{" "}
        <a
          href="http://www.omdbapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          OMDB
        </a>{" "}
        que retorna información sobre películas en formato JSON.
      </p>{" "}
    </div>
  );
}
export default Welcome;
