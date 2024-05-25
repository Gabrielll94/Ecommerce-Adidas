import React from "react";

const Products = ({ product }) => {
  return (
    <div className="product">
      <img src="product.image" alt="product.name" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Products;
