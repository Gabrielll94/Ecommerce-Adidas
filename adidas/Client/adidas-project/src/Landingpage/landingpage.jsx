import React, { useState } from "react";
import "./landingpage.css";
import NavBar from "../NavBar/NavBar";
import adidasImage from "../assets/a.jpg";
import adidasImage1 from "../assets/adidas1.jpg";
import Footpage from "../FootPage/Footpage";
import Products from "../Products/Products";
import productsData from "../assets/products.json";
import product1 from "../assets/R.jpg";
import product2 from "../assets/arg.jpg";

const Landingpage = () => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleCommentsToggle = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  const handleSelectedRating = (rating) => {
    setSelectedRating(rating);
  };

  const handleSendRating = () => {
    if (selectedRating !== null) {
      console.log(`Puntuacion enviada: ${selectedRating}`);
      alert(`Puntuacion enviada: ${selectedRating}`);
    } else {
      alert("No has seleccionado una puntuación");
    }
  };
  const productsWithImages = productsData.map((product) => {
    let image = "";
    switch (product.id) {
      case 1:
        image = product1;
        break;
      case 2:
        image = product2;
        break;
      default:
        break;
    }
    return { ...product, image };
  });

  return (
    <div className="landing-page">
      <NavBar />
      <div className={`comments-container ${isCommentsOpen ? "open" : ""}`}>
        <div className="comments-header" onClick={handleCommentsToggle}>
          COMENTARIOS
        </div>
        {isCommentsOpen && (
          <div className="comments-content">
            <p>Queremos tu opinion (buena o mala)</p>
            <h1>Recomendarias adidas.com.ar a tus amigos y/o conocidos?</h1>
            <div className="rating-label">Poco probable</div>
            <div className="rating-container">
              {[0, 1, 2, 3].map((num) => (
                <div
                  className={`rating-option ${
                    selectedRating === num ? "selected" : ""
                  }`}
                  key={num}
                  onClick={() => handleSelectedRating(num)}
                >
                  <div className="rating-circle"></div>
                  <a href="#">{num}</a>
                </div>
              ))}
            </div>
            <div className="rating-label">Probable</div>
            <div className="rating-container">
              {[4, 5, 6].map((num) => (
                <div
                  className={`rating-option ${
                    selectedRating === num ? "selected" : ""
                  }`}
                  key={num}
                  onClick={() => handleSelectedRating(num)}
                >
                  <div className="rating-circle"></div>
                  <a href="#">{num}</a>
                </div>
              ))}
            </div>
            <div className="rating-label">Muy probable</div>
            <div className="rating-container">
              {[7, 8, 9, 10].map((num) => (
                <div
                  className={`rating-option ${
                    selectedRating === num ? "selected" : ""
                  }`}
                  key={num}
                  onClick={() => handleSelectedRating(num)}
                >
                  <div className="rating-circle"></div>
                  <a href="#">{num}</a>
                </div>
              ))}
            </div>
            <button className="send-rating-button" onClick={handleSendRating}>
              {" "}
              Enviar Puntuacion
            </button>
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

      {/* Seccion de Productos */}
      <section className="products-section">
        <h1>Productos</h1>
        <div className="products-grid">
          {productsWithImages.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Footpage />
      </footer>
    </div>
  );
};

export default Landingpage;
