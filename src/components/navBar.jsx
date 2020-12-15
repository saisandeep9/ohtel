import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-ligh justify-content-around"
        style={{ padding: "0px" }}
      >
        <div>
          {/* <img
            src="./log.jpg"
            alt="log"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: " 50%",
              marginRight: "20px",
              marginTop: "-40px",
            }}
          /> */}
          <div className="navbar-brand">
            <div
              style={{
                fontSize: "18px",
                fontWeight: "733",
                lineHeight: "19px",
              }}
            >
              E-commerces
            </div>
            <div style={{ fontSize: "13px", fontWeight: "433" }}>
              UI & UX Designer
            </div>
          </div>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"http://localhost:3000/"} className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"http://localhost:3000/"} className="nav-link">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"http://localhost:3000/"} className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"http://localhost:3000/"} className="nav-link">
            Contact
            </NavLink>
          </li>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{ borderRadius: "40px", padding: "5px 20px" }}
          >
            Search
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
