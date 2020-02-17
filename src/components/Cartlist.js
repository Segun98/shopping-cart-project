import React, { useState } from "react";

export default function Cartlist({ name, price, quantity, index, src }) {
  const [qty, setqty] = useState(quantity);

  // // Local storage here
  // useEffect(() => {
  //   localStorage.setItem("itemQty", JSON.stringify(qty));
  // }, [qty]);

  // function updateQty() {
  //   const SavedQty = JSON.parse(localStorage.getItem("itemQty"));
  //   return SavedQty || quantity;
  // }
  function updateQuantity(e) {
    setqty(e.target.value);
  }

  return (
    <div>
      <div key={index} className="cart-page-wrap">
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
        <h5 className="subtotal">N{price * qty}</h5>
        <h5 className="delete">X</h5>
      </div>
    </div>
  );
}
