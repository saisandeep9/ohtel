// import React, { Component } from "react";
// import * as productService from "../services/productService";
// import ListGroup from "./common/listgroup";
// import axios from "axios";
// import http from "../services/httpService";
// import { NavLink } from "react-router-dom";

// class Products extends Component {
//   state = {
//     Products: [],
//     Categories: [],
//   };

//   async componentDidMount() {
//     const { data: Products } = await productService.getproducts();

//     const { data: categories } = await productService.getcategories();
//     this.setState({ Products, Categories: categories });
//   }

//   render() {
//     console.log("products", this.state.Products);
//     return (
//       <div className="mt-2 ">
//         <div className="row ">
//           <div className="col-2">
//             <ListGroup items={this.state.Categories} />
//             {/* {this.state.Categories.map((categorie) => categorie.name)} */}
//           </div>
//           <div >
//             <NavLink className="nav-link " to="/addingProducts">
//               <button className="mt-2">Adding products</button>
//             </NavLink>
//             <h1>This is Products page </h1>
//             <table className="table  ">
//               <thead className="App-nav  ">
//                 <tr>
//                   <th>Name</th>
//                   <th>Price</th>
//                   {/* <th>Description</th>
//                   <th>Entry Date</th> */}
//                 </tr>
//               </thead>
//               <tbody className="text-color ">
//                 {this.state.Products.map((product) => (
//                   <tr key={product._id} className="mouse-hover">
//                     <td>{product.name}</td>
//                     <td>{product.price} </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Products;
