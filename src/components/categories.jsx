import React, { Component } from "react";
import * as categorie from "../services/categories";
import { NavLink, Link } from "react-router-dom";

class Categories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const { data: categories } = await categorie.getcategories();
    this.setState({ categories });
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-4"> OUR CATEGORIES</h3>

        <nav
          className="navbar navbar-expand-lg navbar-light bg-ligh justify-content-around"
          style={{
            padding: "0px",
            margin: "20px",
            background: "#252525",
            boxShadow: " 0 3px 6px 0 rgba(31, 78, 178, 0.25)",
            background: " #252525",
            color: "#00000",
            fontSize: "24px",
          }}
        >
          <ul className="navbar-nav">
            {/* {this.state.categories.map((c) => {
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {c.name}
                  {console.log(c.name)}
                  bbb
                </a>
              </li>;
            })} */}
            {this.state.categories.map((c) => (
              <li className="nav-item">
                <NavLink to={"/" + c.id} className="nav-link" style={{}}>
                  {c.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Categories;
