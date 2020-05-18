import React, { Component } from "react";
import * as userService from "../../services/userService";
class Profile extends Component {
  state = {
    profile: {},
  };

  async componentDidMount() {
    const { data: profile } = await userService.getprofile();
    console.log("profile", profile);
    this.setState({ profile });
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        {this.state.profile.name && (
          <>
            Name:-
            <label> {this.state.profile.name}</label>
            <br />
            Email:-
            <label> {this.state.profile.email} </label>
          </>
        )}

        {/* {this.state.profile.map((profile,i) => (
          <>
            <label>{profile.name}</label>
            <label>{profile.email}</label>
          </>
        ))} */}
      </div>
    );
  }
}

export default Profile;
