import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";

function Cartlist({ name, price, quantity, index, src, subtotal}) {
  const [Cart, setCart] = useContext(CartContext);
  const [qty, setqty] = useState(quantity);

//DELETE CART ITEM
  function deleteCartItem() {
    const newCart = [...Cart];
    newCart.splice(index ,1);
    setCart(newCart);
    alert(`${name} has been deleted succesfully!!`)
  }
 
  //CHANGE QUANTITY
  function updateQuantity(e) {
    setqty(e.target.value);
  }

  return (
    <div>
      <div className="cart-page-wrap">
        <img src={src} alt={name} />
        <h5 className="cart-product-name">{name}</h5>
        {/* <input
          type="number"
          name={name}
          min="1"
          max="5"
          value={qty}
          onChange={e => {
            setqty(e.target.value);
          }}
        /> */}
        <select value={qty} onChange={updateQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <h5 className="unit-price">N{price}</h5>
        <h5 className="subtotal">N{subtotal * qty}</h5>
        <h5 className="delete" onClick={deleteCartItem}>
          X
        </h5>
      </div>
    </div>
  );
}

export default Cartlist;
