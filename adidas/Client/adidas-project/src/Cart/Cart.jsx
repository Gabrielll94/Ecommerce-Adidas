import React, { useContext } from "react";
import { cartContext } from "../ShoppingCart/cartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(cartContext);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>¿Listo para empezar?</p>

          <a href="/" className="start-button">
            <span>Empezar</span>
          </a>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Eliminar</button>
              </li>
            ))}
          </ul>

          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;
