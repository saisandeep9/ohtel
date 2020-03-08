import React, { Component } from "react";
import getProducts from "../data/products";
import axios from "axios";
import config from "../config.json";
import http from "../data/httpService";

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
