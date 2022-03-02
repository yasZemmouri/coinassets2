import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">coinAssets</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            {/* <li>
              <Link to="/watched">Watched</Link>
            </li> */}
            <li>
              <Link to="/assets">Assets</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
