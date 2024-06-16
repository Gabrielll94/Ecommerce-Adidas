import React from "react";
import "./Footpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footpage = () => {
  return (
    <div className="footpage">
      <div className="footpage-section">
        <h4>Productos</h4>
        <ul>
          <li>Calzado</li>
          <li>Zapatillas</li>
          <li>Ropa</li>
          <li>Accesorios</li>
          <li>Botines</li>
          <li>Rompevientos</li>
          <li>Conjunto</li>
          <li>Ojotas</li>
        </ul>
      </div>

      <div className="footpage-section">
        <h4>Deportes</h4>
        <ul>
          <li>Seleccion Argentina</li>
          <li>River Plate</li>
          <li>Boca Juniors</li>
          <li>Futbol</li>
          <li>Running</li>
          <li>Basquet</li>
          <li>Trainning</li>
        </ul>
      </div>

      <div className="footpage-section">
        <h4>Colecciones</h4>
        <ul>
          <li>Ultra Booth</li>
          <li>Stan Smith</li>
          <li>Adicolor</li>
          <li>Superstars</li>
          <li>Originals</li>
          <li>Forum</li>
          <li>Coleccion Black & White</li>
        </ul>
      </div>

      <div className="footpage-section">
        <h4>Productos</h4>
        <ul>
          <li>Calzado</li>
          <li>Zapatillas</li>
          <li>Ropa</li>
          <li>Accesorios</li>
          <li>Botines</li>
          <li>Rompevientos</li>
          <li>Conjunto</li>
          <li>Ojotas</li>
        </ul>
      </div>

      <div className="footpage-section">
        <h4>Asitencia</h4>
        <ul>
          <li>Dudas frecuentes</li>
          <li>Productos Adidas</li>
          <li>Realizar pedidos</li>
          <li>Pagos</li>
          <li>Envio</li>
          <li>Autogestionar mi devolucion</li>
          <li>Devoluciones</li>
          <li>Cambio en tienda</li>
        </ul>
      </div>

      <div className="footpage-section">
        <h4>Informacion de la empresa</h4>
        <ul>
          <li>Acerca de Adidas</li>
          <li>Trabaja en nuetro equipo</li>
          <li>Prensa</li>
          <li>Informacion corporativa</li>
        </ul>
      </div>

      <div className="footpage-section">
        <h4>Tiendas</h4>
        <ul>Buscador de tiendas</ul>
      </div>

      <div className="footpage-section">
        <h4>Nuestro mundo</h4>
        <ul>
          <li>Impacto</li>
          <li>Personas</li>
          <li>Planeta</li>
        </ul>
      </div>

      <div className="footpage-section">
        <h4>Siguenos</h4>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/adidas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/adidas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/adidas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/user/adidas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footpage;
