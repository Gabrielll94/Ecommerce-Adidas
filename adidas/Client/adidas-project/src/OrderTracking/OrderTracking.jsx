import React, { useState } from "react";

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("");

  const handleOrderTracking = () => {
    console.log(`Buscando el pedido con numero: ${orderNumber}`);
    alert(`Seguimiento de pedido: ${orderNumber}`);
  };

  return (
    <div className="order-tracking">
      <h2>Seguimiento de tu pedido</h2>
      <p>Introduce el numero de tu pedido para rastrearlo</p>
      <div className="tracking-form">
        <input
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Numero de pedido"
        />
        <button onClick={handleOrderTracking}>Buscar</button>
      </div>
    </div>
  );
};

export default OrderTracking;
