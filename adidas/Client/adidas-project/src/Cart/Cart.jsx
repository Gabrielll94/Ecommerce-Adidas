import React, { useContext } from "react";
import { cartContext } from "../ShoppingCart/cartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(cartContext);

  return (
    <div className="cart">
      {/* <h2>Tu carrito</h2> */}
      {/* {cartItems.length === 0} ? (<p>Tu carrito esta vacio</p>) : ( */}
      <>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {cartItems.name} - ${cartItems.price}
              {/* <button onClick={() => removeFromCart(item)}>
                Eliminar del carrito
              </button> */}
            </li>
          ))}
        </ul>
        {/* <button onClick={clearCart}>Vaciar carrito</button>  */}
      </>
    </div>
  );
};

export default Cart;
