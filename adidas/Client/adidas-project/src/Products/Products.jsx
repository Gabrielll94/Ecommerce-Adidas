import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Products.css";
import { cartContext } from "../ShoppingCart/cartContext";

const Products = ({ product }) => {
  const { addToCart } = useContext(cartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Products;
