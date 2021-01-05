import React from "react";
import Validation from "../common/validation";
import Form from "../common/form";
import auth from "../../services/authService";
import Input from "../common/input";
import Joi from "joi-browser";
import { NavLink, Link } from "react-router-dom";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
  };

  doSubmit = async () => {
    console.log(this.state.data);
    const { data } = this.state;
    // const success = await auth.login(data);
    // console.log("data", success);
    // if (success) {
    //   window.location = "/home";
    // }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div
          className="sectio bg-dark d-flex justify-content-center align-self-center "
          style={{
            height: "100%",
            marginTop: "0px",
            minHeight: "917px",
            backgroundImage: "url(/coverPage.Png)",
            backgroundSize: " cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#252525",
          }}
        >
          <div
            className="col-md-4 "
            style={{ backgroundColor: "rgb(123 109 109 / 62%)" }}
          >
            <form
              onSubmit={this.handleSubmit}
              className="col-md- "
              style={{ padding: "50px 0" }}
            >
              <h1> Login</h1>
              {this.renderInput("email", "Email", "form-control", true)}
              {this.renderInput(
                "password",
                "Password",
                "form-control",
                false,
                "password"
              )}
              {this.renderButton("Login")}
              <br />
              <label
                htmlFor="register"
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                <Link
                  to={"/signup"}
                  style={{ textDecoration: `none`, color: "#FFFFFF" }}
                >
                  Create new account
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
