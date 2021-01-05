import React, { Component } from "react";

class Why extends Component {
  state = {
    data: [
      {
        title: "heading 1",
        text:
          "A thotel is an establihment that provides paid lodging on a short-term basis Hotel rooms are usually numberd ",
      },
      {
        title: "heading 2",
        text:
          "A thotel is an establihment that provides paid lodging on a short-term basis Hotel rooms are usually numberd ",
      },
      {
        title: "heading 3",
        text:
          "A thotel is an establihment that provides paid lodging on a short-term basis Hotel rooms are usually numberd ",
      },
      {
        title: "heading 4",
        text:
          "A thotel is an establihment that provides paid lodging on a short-term basis Hotel rooms are usually numberd ",
      },
    ],
  };
  render() {
    return (
      <div
        style={{
          padding: "60px",
          margin: "30px 0",
          background: "linear-gradient(110deg, #1f4eb2 -5%, #0b8b9e 114%)",
          height: "501px",
        }}
      >
        <div className="container">
          <h2>WHY US?</h2>
          <div className=" d-flex flex-row ">
            {this.state.data.map((d) => (
              <div
                className="card "
                style={{
                  width: "264px",
                  height: "270px",
                  margin: "20px",
                  borderRadius: "5px",
                  padding: "30px 3px",
                }}
              >
                <div className="card-body" style={{ padding: "20px" }}>
                  {/* <label htmlFor="category">{d.category}</label> */}

                  <h3 className="card-title  "> {d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Why;
