import React, { Component } from "react";

import axios from "axios";

class Products extends Component {
  state = {
    Products: [],
    categories: []
  };

  async componentDidMount() {
    // const { data: products } = await axios.get(config.apiUrl + "/products");

    const { data: products } = await axios.get(
      process.env.REACT_APP_API_URL + `/products`
    );

    this.setState({ Products: products });
  }

  render() {
    console.log("products", this.state.Products);
    return (
      <div className="container mt-3 ">
        <h1>This is Products page </h1>
        <table className="table  ">
          <thead className="App-nav  ">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Entry Date</th>
            </tr>
          </thead>
          <tbody className="text-color">
            {this.state.Products.map(product => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
