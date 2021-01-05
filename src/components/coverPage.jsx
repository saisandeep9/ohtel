import React, { Component } from "react";

class CoverPage extends Component {
  state = {};

  render() {
    const background = {
      backgroundImage: "url(/coverPage.Png)",
      backgroundSize: " cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "700px",
      marginTop: "0px",
    };
    return (
      <div className="coverPage" style={background}>
        {/* <div
          className="text-light"
          style={{
            background: "rgb(37 37 37 / 61%)",
            position: "absolute",
            left: "100px",
            top: "160px",
            padding: "20px 20px",
          }}
        >
          <p style={{}}>Hello I'm</p>
          <h1>Sai sandeep</h1>
          <small>UI & Ux</small>
          <br />
          <h3 className="">
            <i className="fa fa-facebook-square m-2"></i>
            <i className="fa fa-twitter m-2"></i>
            <i class="fa fa-linkedin m-2"></i>
            <i class="fa fa-instagram m-2"></i>
          </h3>

          <button className="  button">HIRE ME</button>
          <button className="  button">SEE MY RESUME</button>
        </div> */}
      </div>
    );
  }
}

export default CoverPage;
