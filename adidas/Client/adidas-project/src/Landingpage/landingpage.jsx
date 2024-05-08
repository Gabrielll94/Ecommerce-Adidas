import React, { useState, useEffect } from "react";
import "./landingpage.css";
import NavBar from "../NavBar/NavBar";
import adidasImage from "../assets/adidas.jpg";
import adidasImage1 from "../assets/adidas1.jpg";

const Landingpage = () => {
  document.addEventListener("mousemove", function (e) {
    const commentsContainer = document.querySelector(".comments-container");
    mouseX = e.clientX;
    mouseY = e.clientY;
    commentsContainer.style.transform = `translate(${mouseX}px. ${mouseY}px)`;
  });

  return (
    <div className="landing-page">
      <NavBar />
      <div className="comments-container">
        <div className="comments">COMENTARIOS</div>
      </div>
      {/* Banner principal */}
      <section className="banner">
        <div className="banner-content">
          <img src={adidasImage} alt="imagen-adidas"></img>
          <img src={adidasImage1} alt="imagen-adidas1"></img>
          <button type="button" className="btn btn-primary">
            Shop Now!
          </button>
        </div>
      </section>

      {/* Seccion de ofertas */}
      <section className="offers">
        <h2>Ofertas</h2>
      </section>

      {/* Reviews */}
      <section className="reviews">Reviews</section>

      {/* Footer */}
      <footer className="footer"></footer>
    </div>
  );
};

export default Landingpage;
