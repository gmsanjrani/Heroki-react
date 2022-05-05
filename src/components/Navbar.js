import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Heroki</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
