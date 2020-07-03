import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams, useHistory } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("Search for movies");
  const [movies, set_movies] = useState([]); // data fetched will be set in this array
  const params = useParams();

  const history = useHistory();

  const search = async () => {
    console.log("Start searching for:", searchText);

    set_searchState("Searching..."); // Status of searching

    const data = await axios.get(
      // Fetch data with and await
      `http://www.omdbapi.com/?s=${params.search}&apikey=7a19119e`
    );

    set_movies(data.data.Search); // assigned the data to set_movies
    console.log(data.data.Search);
    set_searchState("Done"); // While finished searching show message done
  };

  useEffect(() => {
    search();
  }, []);

  const newSearchFunctionInAddressBar = () => {
    const queryParam = encodeURIComponent(searchText); // Making sure will be a good url without spaces or chars
    history.push(`/discover/${queryParam}`);
  };

  // mapping over all the movies and make a list for title and year
  const displayMovies = movies.map((movieCard) => {
    return (
      <NavLink
        className="col-md-4"
        key={movieCard.imdbID}
        to={`/discover/${movieCard.imdbID}`}
      >
        <div className="card">
          <img src={movieCard.Poster} alt="" />
          <div className="card-body">
            <p>{movieCard.Title}</p>
            <p>{movieCard.Year}</p>
          </div>
        </div>
      </NavLink>
    );
  });

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h3>{searchState}</h3>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)} // search for changes and takes the text to a value
        />
        <button onClick={newSearchFunctionInAddressBar}>Search</button>
      </p>
      <div className="container">
        <div className="row">{displayMovies}</div>
      </div>
    </div>
  );
}
