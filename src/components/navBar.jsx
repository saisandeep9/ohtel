import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top  navbar-expand-lg navbar-light bg-ligh justify-content-around"
        style={{ padding: "5px" }}
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
          <div className="navbar-brand navbar-nav">
            <div className="nav-item">
              <NavLink to={"/"} className="nav-link" style={{}}>
                <img src="/log.png" alt="" style={{background:"#fffff"}} />
              </NavLink>
            </div>
            <div style={{ fontSize: "13px", fontWeight: "433" }}></div>
          </div>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/login"} className="nav-link">
              Loing/Register
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to={"/addpost"} className="nav-link">
              Add Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"http://localhost:3000/"} className="nav-link">
              About
            </NavLink>
          </li> */}
          <li className="nav-item">
            <button
              className="btn btn-outline-dark my-2 my-sm-0"
              type="submit"
              style={{
                borderRadius: "40px",
                padding: "0px 10px",
                marginLeft: "5px",
              }}
            >
              <NavLink to={"/post"} className="nav-link">
                + Post AD
              </NavLink>
            </button>
          </li>
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{ borderRadius: "40px", padding: "5px 20px" }}
          >
            Search
          </button> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
