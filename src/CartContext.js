import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [Cart, setCart] = useState(CartItems);

  //PERSIST CART TO LOCAL STORAGE
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(Cart));    
  }, [Cart]);

  function CartItems() {
    const SavedCartItems = JSON.parse(localStorage.getItem("cart"));
    return SavedCartItems || [];
  }
  
  return (
    <CartContext.Provider value={[Cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
}
