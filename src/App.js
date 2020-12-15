import React, { Component } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import CoverPage from "./components/coverPage";
import Home from "./components/home";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Products from "./components/products";
import Users from "./components/users/users";
import AddingProduct from "./components/addingProducts";
import Login from "./components/users/login";
import auth from "./services/authService";
import "./App.css";
import "./background.css";
import Signup from "./components/users/signup";
import Logout from "./components/users/logout";
import Profile from "./components/users/profile";
import MainPage from "./components/mainPage";
// import Google from "./components/google"

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      // <div className="App">

      <div className="m-2">
        <NavBar user={this.state.user} />

        <main>
          <Switch>
            {this.state.user && (
              <>
                <Route path="/home" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/products" exact component={Products} />
                <Route path="/users" exact component={Users} />
                <Route path="/addingProducts" exact component={AddingProduct} />
                <Route path="/logout" exact component={Logout} />
              </>
            )}
           
            {/* <Route path="/" exact component={CoverPage} /> */}
            <Route path="/" exact component={MainPage} />
            {/* <Route path="/" exact component={Google} />    */}
            <Route path="/login" exact component={Login} />

            <Route path="/signup" exact component={Signup} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
