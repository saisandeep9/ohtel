import React, { Component } from "react";
import Input from "./common/input";

class Css extends Component {
  state = {};
  render() {
    return (
      <div>
        <hr />
        <h1>from</h1>
        {/* <div class="container "> */}
        <div class="row box">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">
            One of three columns
            <h1>from from from from from from from </h1>
          </div>
          <div class="col-sm">
            One of three columns
            <form className="p-3 box " style={{ width: "350px" }}>
              <Input
                name="email"
                label="Email address"
                type="text"
                // value={data.email}
                placeholder="Enter email"
                className="form-control "
                // onChange={this.handleChange}
                // error={errors.email}
              />

              <Input
                name="password"
                label="Password"
                type="password"
                // value={data.password}
                placeholder="Password"
                className="form-control "
                // onChange={this.handleChange}
                // error={errors.password}
              />
            </form>
          </div>
        </div>
        {/* </div> */}

        <hr />

        <div class="row box">
          <div class="col">1 of 3</div>
          <div class="col-6">2 of 3 (wider)</div>
          <div class="col">3 of 3</div>
        </div>
        <hr />
        <div class="row box">
          <div class="col">1 of 3</div>
          <div class="col-5">2 of 3 (wider)</div>
          <div class="col">3 of 3</div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Css;
