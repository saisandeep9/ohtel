import React, { Component } from "react";

import axios from "axios";

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
    return (
      <div className="container mt-3 w-40">
        <h1>This is Users page </h1>
        <table className="table">
          <thead className="App-nav">
            <tr>
              <th>Name</th>
              <th>E-mail id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
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
