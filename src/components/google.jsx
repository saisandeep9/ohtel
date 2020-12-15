// import React, { Component } from "react";

// class Google extends Component {
//   state = {
//     list: ["a", "b", "c"],
//     value: "",
//   };

//   add = (value) => {
//     var list = this.state.list;

//     list = [...list, value];
//    var v=""
//     this.setState({ list, value:v });
//   };

//   delete = (list) => {
//     console.log(list);
//     var l = this.state.list;
//     const filteredList = l.filter((li) => li !== list);
//     this.setState({ list: filteredList });
//   };

//   cheakBox = () = {

//   }

//   // handleSubmit=(evt) =>{
//   //       evt.preventDefault();

//   //   this.add(this.state.value)

//   // }

//   //   handleDeleteFromProducts = productToDelete => {
//   //     const actualProducts = this.state.products;
//   //     const filteredProducts = actualProducts.filter(
//   //       product => product._id !== productToDelete._id
//   //     );
//   //     this.setState({ products: filteredProducts });
//   //   };

//   render() {
//     return (
//       <div>

//           <input
//             type="text" value={this.state.value}
//             onChange={(evt) => {

//               this.setState({
//                 value: evt.target.value,

//               })
//             }
//             }
//           />
//           <button type="submit"
//             onClick={() => this.add(this.state.value)}
//           >click</button>

//         <ul>
//           {this.state.list.map((list) => (
//             <>

//                 <li>  <input type="checkbox"  checked={true} />{list}   </li>

//               <button
//                 onClick={() => this.delete(list)}
//                 className="btn btn-success m-2"
//               >
//                 delete</button>
// <div>

// </div>

//             </>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Google;
