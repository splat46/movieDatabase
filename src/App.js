import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./style/global.scss";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/discover/:searchtext" component={DiscoverMoviesPage} />
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/aboutpage" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
