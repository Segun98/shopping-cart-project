import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";


export default function Header() {
  const [Cart, ] = useContext(CartContext);
  const linkStyle = {
    textDecoration: "none",
    color: "hsl(228, 39%, 23%)"
  };
  return (
    <div className="header">
      <div className="header-wrap">
        <div className="logo" title="WorldShop Logo">
          <Link to="/" style={linkStyle}>
            WORLD<span style={{ color: "hsl(12, 88%, 59%)" }}>SHOP</span>
          </Link>
        </div>
        <div className="navigation">
        <Link to="/" style={linkStyle}>
              HOME
        </Link>
        <Link to="/cart" style={linkStyle}>
            CART
        </Link>
        </div>

        <Link to="/cart" style={linkStyle}>
          <div className="header-cart">
            <div className="cart-icon" title="shopping cart">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="cart-text">{Cart.length === 0? '':`${Cart.length} ${Cart.length === 1? 'item': 'items'}`}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
