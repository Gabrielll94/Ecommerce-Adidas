import React from "react";
import ReactDOM from "react";
import App from "./App";
import { CartProvider } from "./ShoppingCart/cartContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
