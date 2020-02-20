import React from "react";
import Productslist from "./Productslist";

export default function Index() {

  // PRODUCTS ARRAY
  const Products = [
    {
      id: 0,
      quantity: 1,
      src: "/images/product_2.png",
      name: "Product One",
      price: 62850,
      subtotal: 62850
    },
    {
      id: 1,
      quantity: 1,
      src: "/images/product_4.png",
      name: "Product Two",
      price: 28000,
      subtotal: 28000
    },
    {
      id: 2,
      quantity: 1,
      src: "/images/product_5.png",
      name: "Product Three",
      price: 192000,
      subtotal: 192000
    },
    {
      id: 3,
      quantity: 1,
      src: "/images/product_1.png",
      name: "Product Four",
      price: 124500,
      subtotal: 124500
    },
    {
      id: 4,
      quantity: 1,
      src: "/images/product_3.png",
      name: "Product Five",
      price: 155000,
      subtotal: 155000
    },
    {
      id: 5,
      quantity: 1,
      src: "/images/product_6.png",
      name: "Product Six",
      price: 280000 ,
      subtotal: 280000
    },
    {
      id: 6,
      quantity: 1,
      src: "/images/product_8.png",
      name: "Product Seven",
      price: 227650,
      subtotal: 227600
    },
    {
      id: 7,
      quantity: 1,
      src: "/images/product_7.png",
      name: "Product Eight",
      price: 175000,
      subtotal: 175000
    }
  ];

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
              key={index}
              src={product.src}
              index={index}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              subtotal={product.subtotal}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
