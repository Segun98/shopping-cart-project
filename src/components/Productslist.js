import React, { useContext} from "react";
import { CartContext } from "../CartContext";

function Productslist({ src, name, price, quantity, subtotal, id, index}) {
  const [Cart, setCart] = useContext(CartContext);

  // ADD PRODUCT TO CART
  function addToCart() {
    let newCart = {
      quantity,
      src,
      name,
      price,
      subtotal,
      id
    };
    if (Cart.includes(Cart[index])) {
      alert(`${name.toUpperCase()} IS ALREADY IN YOUR CART!!`);
    } else {
      setCart([...Cart, newCart]);
      alert(`${name.toUpperCase()} HAS BEEN ADDED TO CART!!!!`);
    }

    //THIS IS ME TRYING TO PREVENT DUPLICATES IN THE ARRAY . IM TIREDDDD

    //newCart.filter((item, index)=> newCart.indexOf(item) === index)
    // const without = Cart.filter((item, index)=> Cart.indexOf(item) !== index)
    // if (!without) {
    //   setCart( [...without, newCart]);
    //   alert(`${name.toUpperCase()} HAS BEEN ADDED TO CART!!!!`);
    // } else {
    //   const existing = Cart.filter((item, index)=> Cart.indexOf(item) === index);
    //     setCart([...existing, newCart]);
    //  }

    //newCart.filter((it, index)=> newCart.indexOf(it) === index)
    //Cart.reduce((Cart, index)=> Cart.includes(index)? Cart : setCart([...Cart,newCart]),[])
  }

  return (
    <div>
      <div className="product-item">
        <h4>{name}</h4>
        <img src={src} alt={name} />
        <h3>N{price}</h3>
        <button onClick={addToCart}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default Productslist;
