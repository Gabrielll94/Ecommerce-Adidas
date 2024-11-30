import React from "react";
import "./Faq.css";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "¿Cómo puedo realizar un seguimiento de mi pedido?",
      answer:
        "Puedes realizar el seguimiento ingresando a la sección de 'Seguimiento de pedidos' en nuestro sitio y utilizando el número de tu pedido.",
    },
    {
      question: "¿Cuál es el tiempo de entrega estimado?",
      answer:
        "El tiempo de entrega depende de tu ubicación, pero generalmente es de 3 a 5 días hábiles.",
    },
    {
      question: "¿Puedo devolver un producto?",
      answer:
        "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. Consulta nuestra política de devoluciones para más detalles.",
    },
  ];
  return (
    <div className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <a></a>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
      <div className="back-to-main">
        <button className="main-menu-button" onClick={() => navigate("/")}>
          Menú principal
        </button>
      </div>
    </div>
  );
};

export default Faq;
