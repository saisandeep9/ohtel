import React, { Component } from "react";
import Home from "./home";
import CoverPage from "./coverPage";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <CoverPage />
        <Home />
      </div>
    );
  }
}

export default MainPage;
