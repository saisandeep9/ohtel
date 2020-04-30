import React, { Component } from "react";

import * as userService from "../services/userService";
import Input from "./common/Input";
import Joi from "joi-browser";

class Signup extends Component {
  state = {
    data: {
      name: "",
      "e-mail": "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required(),
    "e-mail": Joi.string().required(),
    password: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    // if (Object.keys(errors).length !== 0) return;

    //calling back end
    // console.log("data", this.state.data);
    // console.log("calling back end");
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // console.log(e.currentTarget.value);
    const data = { ...this.state.data };
    data[input.id] = input.value;
    this.setState({ data });
  };

  validate = () => {
    const { data } = this.state;
    const result = Joi.validate(data, this.schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  // validate = () => {
  //   const { data } = this.state;

  //   const result = Joi.validate(data, this.schema, { abortEarly: false });

  //   console.log("joi", result);
  //   const errors = {};

  //   if (data.name.trim() === "") errors.name = "name is requrired";
  //   if (data.email.trim() === "") errors.email = "Enter the E-mail address";
  //   if (data.password.trim() === "")
  //     errors.password = "password is requrired";
  //   return Object.keys(errors).length === 0 ? {} : errors;
  // };

  doSubmit = async () => {
    const success = await userService.register(this.state.data);
    console.log("data", this.state.data);
    if (success) {
      window.location = "/signup";
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="row m-5">
          <div className="col-8 text-center">
            <h2 className>welcome E-commerce website</h2>
          </div>

          <div className="col-4">
            <div
              className="container  box  float-right "
              // style={{ width: "0%" }}
            >
              <form onSubmit={this.handleSubmit}>
                <h1 className="text-center"> Sign up</h1>
                <Input
                  id="name"
                  label="Name"
                  type="text"
                  value={data.name}
                  placeholder="Name"
                  autoFocus="true"
                  onChange={this.handleChange}
                  error={errors.name}
                  // className=""
                />

                <Input
                  id="e-mail"
                  label="Email address"
                  type="text"
                  value={data["e-mail"]}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  error={errors["e-mail"]}
                />

                <Input
                  id="password"
                  label="Password"
                  type="password"
                  value={data.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                  error={errors.password}
                />

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Default radio
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Second default radio
                  </label>
                </div>

                {/* <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={data.password}
              placeholder="Password"
              onChange={this.handleChange}
            ></input>
          </div> */}
                <center>
                  <button
                    type="submit"
                    className=" btn btn-primary  btn-block mb-3 mt-2"
                  >
                    Sign up
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
