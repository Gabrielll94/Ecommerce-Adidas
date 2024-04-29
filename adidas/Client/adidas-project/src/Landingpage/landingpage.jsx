import React from "react";
import "./landingpage.css";
import Logo from "../assets/Logo_Adidas.png";

const Landingpage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <img src={Logo} alt="logo-adidas"></img>
      </header>

      {/* Banner principal */}
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to Adidas Eccomerce</h1>
          <p>Discover the ultimate shopping experience with us.</p>
          <button type="button" className="btn btn-primary">
            Shop Now!
          </button>
        </div>
      </section>

      {/* Seccion de ofertas */}
      <section className="offers">Carrousel</section>

      {/* Reviews */}
      <section className="reviews"></section>

      {/* Footer */}
      <footer className="footer"></footer>
    </div>
  );
};

export default Landingpage;
