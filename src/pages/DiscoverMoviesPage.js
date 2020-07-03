import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("Search for movies");

  // data fetched will be set in this array
  const [movies, set_movies] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);

    const queryParam = encodeURIComponent(searchText);

    // While searching show message searching...
    set_searchState("Searching...");

    // Fetch data with Axios
    const data = await axios.get(
      `http://www.omdbapi.com/?s=${queryParam}&apikey=7a19119e`
    );

    // assigned the data to set_movies
    set_movies(data.Search);

    console.log(data.data.Search);

    // While finished searching show message done
    set_searchState("Done", data);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h3>{searchState}</h3>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
    </div>
  );
}
