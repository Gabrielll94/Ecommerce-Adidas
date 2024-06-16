import React from "react";
import PropTypes from "prop-types";
import "./Products.css";

const Products = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <button>Agregar al carrito</button>
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
