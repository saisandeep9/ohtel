import React from "react";
import Validation from "../common/validation";
import Form from "../common/form";
import auth from "../../services/authService";
import Input from "../common/input";
import Joi from "joi-browser";

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

        <div className="row">
          <div className="col-6 bg-dark" text-center>
              <h2 className="">welcome E-commerce website</h2>
          </div>
          <div className="col-6 " style={{background:"#252525"}}>
            
            <form onSubmit={this.handleSubmit} className="col-md-7 ">
          <h1 className="text-center"> Login</h1>
          {this.renderInput("email", "Email", "form-control" , true, )}
          {this.renderInput("password", "Password", "form-control", false, "password")}
          {this.renderButton("Login")}
            </form>
            </div>
</div>





        {/* <div className="row m-5">
          <div className="col-8 text-center">
            <h2 className="">welcome E-commerce website</h2>
          </div>

          <div className="col-4">
            <div
              className="container  float-right "
              // style={{ width: "0%" }}
            >
              <form onSubmit={this.handleSubmit}>
                <h1 className="text-center"> Login</h1>

                <Input
                  name="email"
                  label="Email"
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
      
      
       */}
      
      </div>
    );
  }
}

export default Login;
