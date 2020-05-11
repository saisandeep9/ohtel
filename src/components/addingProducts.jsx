import React from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import Validation from "./common/validation";
import axios from "axios";

class AddingProduct extends Validation {
  state = {
    data: {
      productName: "",
      price: "",
      description: "",
      // category: "",
      // productImage: null,
    },
    errors: {},
    productImage: null,
  };

  schema = {
    productName: Joi.string().required(),
    price: Joi.number().required().min(10).max(100000),
    description: Joi.string().min(5).max(250),
    // category: Joi.string(),
    // productImage: Joi,
  };

  fileSelectHandler = (event) => {
    console.log(event.target.files[0]);

    this.setState({
      data: { productImage: event.target.files[0] },
    });
    // console.log("img:-", this.state.data.productImage);
  };
  fileUploadHandler = (e) => {
    e.preventDefault();
    console.log("fileUploadHandler", this.state.productImage);

    const fd = new FormData();
    fd.append("image", this.state.productImage);
    console.log("fd", fd);
    // axios.post("");
  };

  doSubmit = async () => {
    console.log("data", this.state.data);
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="  box  p-2 m-3" style={{ width: "30%" }}>
        <h2 className="text-center"> Adding Products</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            id="productName"
            label="Product Name"
            type="text"
            value={data.productName}
            placeholder={"Name"}
            className="form-control "
            autoFocus="true"
            onChange={this.handleChange}
            error={errors.productName}
          />
          <Input
            id="price"
            label="Product Price"
            type="text"
            value={data.price}
            placeholder={"Product Price"}
            className="form-control "
            onChange={this.handleChange}
            error={errors.price}
          />
          <Input
            id="description"
            label="Description"
            type="text"
            value={data.description}
            placeholder={"Description"}
            className="form-control "
            onChange={this.handleChange}
            error={errors.description}
          />

          <Input
            id="ProductImage"
            label="Product Image"
            type="file"
            value={data.ProductImage}
            // placeholder={"ProductImage"}
            onChange={this.fileSelectHandler}
            error={errors.ProductImage}
          />
          <button
            type="submit"
            className=" btn btn-primary  btn-block mb-3 mt-2"
          >
            Submit
          </button>
        </form>

        <Input
          id="ProductImage"
          label="Product Image"
          type="file"
          value={data.ProductImage}
          // placeholder={"ProductImage"}
          onChange={this.fileSelectHandler}
          error={errors.ProductImage}
        />

        <form onSubmit={this.fileUploadHandler}>
          <button
            type="submit"
            className=" btn btn-primary  btn-block mb-3 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddingProduct;
