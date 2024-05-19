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

      {/* Seccion de ofertas */}
      <section className="offers">
        <h2>Ofertas</h2>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Footpage />
      </footer>
    </div>
  );
};

export default Landingpage;
