// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <ul className="navbar-nav mx-auto">
          <div className="navbar-brand">MovieDatabase</div>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/aboutpage">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/discover/searchtext">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
