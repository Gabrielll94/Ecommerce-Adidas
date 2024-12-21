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
    {
      question: "¿Cómo puedo contactar al servicio de atención al cliente?",
      answer:
        "Puedes contactarnos a través de nuestro chat en vivo o llamando al 0800-555-1234. Nuestro horario de atención es de lunes a viernes, de 9:00 a 18:00.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos tarjetas de crédito, débito, transferencia bancaria y métodos digitales como PayPal y Mercado Pago.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <p className="faq-description">
        Encuentra las respuestas a las preguntas más comunes sobre nuestros
        productos y servicios.
      </p>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question">
              <span className="faq-icon">❓</span>
              <h3>{faq.question}</h3>
            </div>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
      <div className="back-to-main">
        <button className="main-menu-button" onClick={() => navigate("/")}>
          Volver al Menú Principal
        </button>
      </div>
    </div>
  );
};

export default Faq;
