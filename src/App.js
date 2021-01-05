import React, { Component } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./components/navBar";

import Login from "./components/users/login";
// import auth from "./services/authService";
import "./App.css";
import "./background.css";
import Signup from "./components/users/register";

import MainPage from "./components/mainPage";
import Addpost from "./components/addPost";

class App extends Component {
  state = { user: {} };

  // componentDidMount() {
  //   const user = auth.getCurrentUser();
  //   this.setState({ user });
  // }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/post" exact component={Addpost} />

          <Route path="/login" exact component={Login} />

          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
