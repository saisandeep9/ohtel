import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <ul className="navbar-nav    ">
          <li className="nav-item active">
            <Link to={"/"} className="  nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to={"/products"} className="  nav-link">
              Products<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to={"/users"} className="  nav-link">
              Users<span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
