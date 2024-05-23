import React, { useState } from "react";
import "./landingpage.css";
import NavBar from "../NavBar/NavBar";
import adidasImage from "../assets/adidas.jpg";
import adidasImage1 from "../assets/adidas1.jpg";
import Footpage from "../Footpage/Footpage";

const Landingpage = () => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleCommentsToggle = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  return (
    <div className="landing-page">
      <NavBar />
      <div className={`comments-container ${isCommentsOpen ? "open" : ""}`}>
        <div className="comments-header" onClick={handleCommentsToggle}>
          COMENTARIOS
        </div>
        {isCommentsOpen && (
          <div className="comments-content">
            <p>Aquí puedes dejar tus comentarios</p>
            <a href="#">Opción 1</a>
            <a href="#">Opción 2</a>
            <a href="#">Opción 3</a>
          </div>
        )}
      </div>
      {/* Banner principal */}
      <section className="banner">
        <div className="banner-content">
          <img src={adidasImage} alt="imagen-adidas" />
          <img src={adidasImage1} alt="imagen-adidas1" />
        </div>
      </section>

      <section className="Popular">
        <h1>Popular ahora</h1>
        <ul>
          <li>Forum</li>
          <li>Samba</li>
          <li>Campus</li>
          <li>Terrex</li>
          <li>River</li>
          <li>Zapatillas-hombre</li>
        </ul>
      </section>

      {/* Seccion de ofertas */}
      <section className="offers">
        <h1>UNETE AL CLUB Y CONSIGUE 300 PUNTOS DE BIENVENIDA</h1>
        <button className="register-button">REGÍSTRATE GRATIS ➡</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Footpage />
      </footer>
    </div>
  );
};

export default Landingpage;
