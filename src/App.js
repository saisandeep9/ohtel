import React, { Component } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Products from "./components/products";
import Users from "./components/users";
import "./App.css";
import "./background.css";
import Registration from "./components/registration";

class App extends Component {
  state = {};
  render() {
    return (
      // <div className="App">

      <div className="m-2">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Home /> */}
          <Route path="/products" exact component={Products} />
          <Route path="/users" exact component={Users} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
          {/* <NotFound /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
