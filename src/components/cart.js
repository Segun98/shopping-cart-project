import React, { useContext} from "react";
import { CartContext } from "../CartContext";
import Cartlist from "./Cartlist";

export default function Cart() {
  const [Cart, ] = useContext(CartContext);

  //  const totalPrice = Cart.reduce((acc, curr)=> acc + curr.price, 0)

  return (
    <div className="cart-page">
      <div className="cart-page-heading">
        <h2>Shopping Cart - {Cart.length} Items</h2>
        <div className="heading-dash"></div>
      </div>
      <div className="cart-list">
        <div
          className={
            Cart.length > 0
              ? "cart-headings"
              : "cart-headings cart-headings-none"
          }
        >
          <h5>Img</h5>
          <h5>Name</h5>
          <h5>Qty</h5>
          <h5>Unit Price</h5>
          <h5>Subtotal</h5>
          <h5>Delete</h5>
        </div>
        {Cart.map((c, index) => (
          <Cartlist
            key={index}
            name={c.name}
            price={c.price}
            quantity={c.quantity}
            index={index}
            src={c.src}
          />
        ))}
      </div>
      {/* <div
        className={
          Cart.length > 0 ? "cart-footer" : "cart-footer cart-footer-none"
        }
      >
        <h5></h5>
        <h5></h5>
        <h5></h5>
        <h5></h5>
        <h5
          style={{
            borderTop: "1px solid hsl(12, 88%, 59%)",
            color: "hsl(12, 88%, 59%)",
            fontWeight: "bold"
          }}
        >
          TOTAL: <br /> {totalPrice}
        </h5>
      </div> */}
    </div>
  );
}
