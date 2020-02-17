// import React from 'react'
// import Index from "./index";

// export default function Products() {

//     const Products = [
//     {
//       src:
//         "https://res.cloudinary.com/dowrygm9b/image/upload/v1581608022/shopping%20cart%20project/product_2_dmhgi0.png",
//       name: "Product One",
//       price: "N100,000"
//     },
//     {
//       src:
//         "https://res.cloudinary.com/dowrygm9b/image/upload/v1581608022/shopping%20cart%20project/product_4_h9frjc.png",
//       name: "Product Two",
//       price: "N10,000"
//     },
//     {
//       src:
//         "https://res.cloudinary.com/dowrygm9b/image/upload/v1581608020/shopping%20cart%20project/product_5_nxwk2q.png",
//       name: "Product Three",
//       price: "N190,000"
//     },
//     {
//       src:
//         "https://res.cloudinary.com/dowrygm9b/image/upload/v1581608020/shopping%20cart%20project/product_6_epbx7y.png",
//       name: "Product Four",
//       price: "N120,000"
//     },
//     {
//       src:
//         "https://res.cloudinary.com/dowrygm9b/image/upload/v1581608020/shopping%20cart%20project/product_8_trnjlu.png",
//       name: "Product Five",
//       price: "N155,000"
//     },
//     {
//       src:
//         "https://res.cloudinary.com/dowrygm9b/image/upload/v1581608398/shopping%20cart%20project/product_10_lc9vrd.png",
//       name: "Product Six",
//       price: "N200,000"
//     },
//     {
//       src: "/images/product_8.png",
//       name: "Product Seven",
//       price: "N200,000"
//     }
//   ]
//     return (
//         <div >
//            {Products.map((product, index) => (
//             <Index src={product.src} name={product.name} price={product.price}  key={index} />
//            ))} 
//         </div>
//     )
// }





// import React, { useContext } from "react";
// import { CartContext } from "../CartContext";

// export default function Index({ src, name, price }) {
//   const [Cart, setCart] = useContext(CartContext);

  

//   function addToCart() {
//     const item = {
//       src: src,
//       name: name,
//       price: price
//     };
//     setCart(currentState => [...currentState, item]);
//   }

//   return (
//     <div className="index">
//       <div className="products">
//         <div className="products-wrap">
//           <div className="product-item">
//             <img src={src} alt={name} />
//             <h4>{name}</h4>
//             <h3>{price}</h3>
//             <button onClick={addToCart}>ADD TO CART</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

