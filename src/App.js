import React from "react";
import "./App.css";
import Header from "./components/header";
import Index from "./components/index";
import Cart from "./components/cart";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/cart" component={Cart} />
            </Switch>
            <Footer />
          </div>
      </Router>
    </CartProvider>
  );
}

export default App;
