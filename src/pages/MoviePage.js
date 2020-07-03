import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios";

export default function MoviePage() {
  const params = useParams();
  console.log("What are param", params.id);

  const [movieData, set_movieData] = useState({});

  const fetchData = async () => {
    const response = await Axios.get(
      `http://www.omdbapi.com/?i=${params.id}&apikey=7a19119e`
    ); //making request
    console.log("response", response.data);
    set_movieData(response.data);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={movieData.Poster} />
          </div>
          <div className="col-md-8">
            <h1>{movieData.Title}</h1>
            Genre:{" "}
            <span className="badge badge-primary">{movieData.Genre}</span>
            <p>Language: {movieData.Language}</p>
            <p>Duration: {movieData.Runtime}</p>
            <p>{movieData.Title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
