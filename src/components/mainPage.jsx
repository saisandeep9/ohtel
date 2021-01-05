import React, { Component } from "react";
import Home from "./home";
import CoverPage from "./coverPage";
import Categories from "./categories";
import Why from "./whyus";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <CoverPage />
        <Categories />
        <Home />
        <Why />
      </div>
    );
  }
}

export default MainPage;
