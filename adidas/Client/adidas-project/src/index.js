import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./ShoppingCart/cartContext";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
