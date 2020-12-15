import React, { Component } from "react";
import getProducts from "../data/products";

class Home extends Component {
  state = {
    data: [
      {
        category: " category-1",
        title: "Project Title 1",
        year: 2019,
        img: "/1.jpg",
      },
      {
        category: " category-2",
        title: "Project Title 2",
        year: 2018,
        img: "/2.jpg",
      },
      {
        category: " category-3",
        title: "Project Title 3",
        year: 2012,
        img: "/3.jpg",
      },
      {
        category: " category-4",
        title: "Project Title 4",
        year: 2015,
        img: "/1.jpg",
      },
      {
        category: " category-5",
        title: "Project Title 5",
        year: 2019,
        img: "/2.jpg",
      },
      {
        category: " category-6",
        title: "Project Title 6",
        year: 2018,
        img: "/3.jpg",
      },
      {
        category: " category-7",
        title: "Project Title 7",
        year: 2012,
        img: "/1.jpg",
      },
      {
        category: " category-8",
        title: "Project Title 8",
        year: 2015,
        img: "/3.jpg",
      },
    ],
  };

  render() {
    return (
      <div
        className="container   d-flex flex-row justify-content-center flex-wrap"
        style={{ marginTop: "50px" }}
      >
        {this.state.data.map((d) => (
          <>
            <div className="card " style={{ width: "18rem", margin: "20px" }}>
              <img
                className="card-img-top"
                src={d.img}
                alt="Card-cap"
                style={{ height: "210px" }}
              />
              <div className="card-body" style={{ padding: "10px" }}>
                <label htmlFor="category">{d.category}</label>
                <div className="d-flex justify-content-between">
                  <h5 className="card-title  ">{d.title}</h5>
                  <label htmlFor="number">{d.year}</label>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Home;
