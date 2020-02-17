import React from "react";
import Productslist from "./Productslist";

export default function Index() {
  const Products = [
    {
      quantity: 1,
      src: "/images/product_2.png",
      name: "Product One",
      price: "100000"
    },
    {
      quantity: 1,
      src: "/images/product_4.png",
      name: "Product Two",
      price: "10000"
    },
    {
      quantity: 1,
      src: "/images/product_5.png",
      name: "Product Three",
      price: "190000"
    },
    {
      quantity: 1,
      src: "/images/product_1.png",
      name: "Product Four",
      price: "120000"
    },
    {
      quantity: 1,
      src: "/images/product_3.png",
      name: "Product Five",
      price: "155000"
    },
    {
      quantity: 1,
      src: "/images/product_6.png",
      name: "Product Six",
      price: "200000"
    },
    {
      quantity: 1,
      src: "/images/product_8.png",
      name: "Product Seven",
      price: "220000"
    },
    {
      quantity: 1,
      src: "/images/product_7.png",
      name: "Product Eight",
      price: "175000"
    }
  ];
//   const [Popup, setPopup] = useState(true);
// <div className="popup">
//     <div className="popup-wrap">
//             <div className="popup-text">
//               <p>{Popup? `${name} has been added to cart` : ''}</p>
//             </div>
//             <button>X</button>
//           </div>
//         </div>
//         setPopup(prevState => !prevState);
//         // Modal(name)

  return (
    <div className="index">
      <div className="heading">
        <h2>NEW ARRIVALS</h2>
        <div className="heading-dash"></div>
      </div>
      <div className="products">
        <div className="products-wrap">
          {Products.map((product, index) => (
            <Productslist
              src={product.src}
              key={index}
              index={index}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
