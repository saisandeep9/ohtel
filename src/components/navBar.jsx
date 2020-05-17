import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div>
      <nav className="navbar navbar-dark  navbar-expand-sm App-nav box ">
        <ul className="navbar-nav    ">
          {user && (
            <>
              {" "}
              <li className="nav-item ">
                <NavLink to={"/home"} className="  nav-link">
                  <i className="fa fa-home"> Home</i>

                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to={"/products"} className="  nav-link">
                  Products<span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to={"/users"} className="  nav-link">
                  <i className="fa fa-users"> Users</i>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/logout">
                  <i className="fa fa-sign-in"> Logout</i>
                </NavLink>
              </li>
            </>
          )}

          {!user && (
            <>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/signup">
                  <i className="fa fa-sign-in"> Sign up</i>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/login">
                  <i className="fa fa-sign-in"> Log in</i>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
