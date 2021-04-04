import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <Router>
        <div className="Header">
          <div className="Div_NavBar">
            <div className="ItemNav">
              <Link to="/">
                Home <i class="fas fa-home"></i>
              </Link>
            </div>
            <div className="ItemNav">
              <Link to="/Top">
                Top <i class="fas fa-film"></i>
              </Link>
            </div>
            <div className="ItemNav">
              <Link to="/Popular">
                Popular <i class="fas fa-film"></i>
              </Link>
            </div>
          </div>
          <div className="SearchMovie">
            <input></input>
            <button className="SearchButton">
              {" "}
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default NavBar;
