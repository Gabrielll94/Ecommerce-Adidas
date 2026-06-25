import React, { useState } from "react";
import "./OrderTracking.css";
import { useNavigate } from "react-router-dom";

const OrderTracking = () => {
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState("");

  const handleOrderTracking = () => {
    console.log(`Buscando el pedido con numero: ${orderNumber}`);
    alert(`Seguimiento de pedido: ${orderNumber}`);
  };

  return (
    <div>
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
        <div className="mail-section">
          <h2>¿Cual es tu correo electronico?</h2>
          <p>Correo electronico*</p>
          <div className="mail-form">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Email"
            />
            <button onClick={handleOrderTracking}>Buscar</button>
          </div>
        </div>
        <div className="back-to-main">
          <button className="main-menu-button" onClick={() => navigate("/")}>
            Volver al Menú Principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
