import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./style/global.scss";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route
          path="/Pages/DiscoverMoviesPage"
          component={DiscoverMoviesPage}
        />
        <Route path="/Pages/AboutPage" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
