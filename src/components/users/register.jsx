import React from "react";
import Validation from "../common/validation";
import Form from "../common/form";
import { NavLink, Link } from "react-router-dom";
import * as user from "../../services/user";

import * as userService from "../../services/userService";
import Input from "../common/input";
import Joi from "joi-browser";

class Signup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      verified: "",
    },
    errors: {},
  };

  schema = {
    name: Joi,
    email: Joi,
    verified: Joi,
  };

  // validate = () => {
  //   const { data } = this.state;

  //   const result = Joi.validate(data, this.schema, { abortEarly: false });

  //   console.log("joi", result);
  //   const errors = {};

  //   if (data.name.trim() === "") errors.name = "name is requrired";
  //   if (data.email.trim() === "") errors.email = "Enter the E-mail address";
  //   if (data.password.trim() === "") errors.password = "password is requrired";
  //   return Object.keys(errors).length === 0 ? {} : errors;
  // };

  doSubmit = async () => {
    console.log(this.state.data);
    const success = await user.postuser(this.state.data);
    // console.log(window.location);
    // console.log(this.props);
    if (success) {
      window.location = "/";
      console.log(window.location);
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div
        style={{
          marginTop: "-40px",
          minHeight: "917px",
          backgroundImage: "url(./coverPage.Png)",
          backgroundSize: " cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#252525",
        }}
      >
        <div className="ro m-5 d-flex justify-content-cente align-self-center ">
          {/* <div
            className="col-sm-8 text-center "
            // style={{ width: "auto" }}
          >
            <div style={{ width: "100%" }}>
              <h2 className="">welcome E-commerce website</h2>
            </div>
          </div> */}

          <div className="col-4 mt-5 ">
            <form
              onSubmit={this.handleSubmit}
              className="p-3 box "
              style={{ width: "350px", color: "#fff" }}
            >
              <h1 className="text-center"> Sign up</h1>

              {this.renderInput("name", "Name", "form-control", true)}
              {this.renderInput("email", "Email", "form-control")}
              {this.renderInput(
                "verified",
                "Password",
                "form-control",
                false,
                "password"
              )}

              {this.renderButton(" Sign up")}

              <br />
              <label
                htmlFor="register"
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                <Link
                  to={"/login"}
                  style={{ textDecoration: `none`, color: "#FFFFFF" }}
                >
                  Login
                </Link>
              </label>
              <br />
              <label
                htmlFor="register"
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                <Link
                  to={"/"}
                  style={{ textDecoration: `none`, color: "#FFFFFF" }}
                >
                  Back to Home
                </Link>
              </label>

              {/* <Input
                name="name"
                label="Name"
                type="text"
                value={data.name}
                placeholder="Name"
                className="form-control "
                autoFocus="true"
                onChange={this.handleChange}
                error={errors.name}
                // className=""
              />

              <Input
                name="email"
                label="Email address"
                type="text"
                value={data.email}
                placeholder="Enter email"
                className="form-control "
                onChange={this.handleChange}
                error={errors.email}
              />

              <Input
                name="password"
                label="Password"
                type="password"
                value={data.password}
                placeholder="Password"
                className="form-control "
                onChange={this.handleChange}
                error={errors.password}
              />

              <div className="radio">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    checked={data.gender === "Male"}
                    onChange={this.handleChange}
                    error={errors.gender}
                  />
                  Male
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    checked={data.gender === "Female"}
                    onChange={this.handleChange}
                    error={errors.gender}
                  />
                  Female
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
              {/* <center>
                <button
                  type="submit"
                  className=" btn btn-primary  btn-block mb-3 mt-2"
                >
                  Sign up
                </button>
              </center>  */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
