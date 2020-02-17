import React, { useContext} from "react";
import { CartContext } from "../CartContext";

export default function Productslist({
  src,
  index,
  name,
  price,
  quantity

}) {
  const [, setCart] = useContext(CartContext);

  function addToCart() {
    let item = {
      quantity: quantity,
      src: src,
      name: name,
      price: price
    };
    setCart(currentState => [...currentState, item]);
    alert(`${name.toUpperCase()} HAS BEEN ADDED TO CART!!!!`)
  }

  return (
    <div>
      <div key={index} className="product-item">
        <h4>{name}</h4>
        <img src={src} alt={name} />
        <h3>N{price}</h3>
        <button onClick={addToCart}>ADD TO CART</button>
      </div>
    </div>
  );
}
