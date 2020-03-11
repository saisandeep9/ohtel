import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark  navbar-expand-sm App-nav">
        <ul className="navbar-nav    ">
          <li className="nav-item active">
            <Link to={"/"} className="  nav-link">
              <i className="fa fa-home"> Home</i>

              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to={"/products"} className="  nav-link">
              Products<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/users"} className="  nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
