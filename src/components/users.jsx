import React, { Component } from "react";
import getProducts from "../data/products";
import axios from "axios";
import config from "../config.json";
import http from "../data/httpService";

class Users extends Component {
  state = {
    Users: [],
    categories: []
  };

  async componentDidMount() {
    // const { data: products } = await axios.get(config.apiUrl + "/products");

    const { data: users } = await axios.get(
      process.env.REACT_APP_API_URL + `/allusers`
    );

    this.setState({ Users: users });
  }

  render() {
    console.log("products", this.state.Products);
    return (
      <div>
        <h1>This is Products page </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Entry Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                {/* <td>{product.price} </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
