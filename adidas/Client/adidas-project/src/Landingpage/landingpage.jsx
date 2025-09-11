import React, { useState } from "react";
import "./landingpage.css";
import NavBar from "../NavBar/NavBar";
import adidasImage from "../assets/admessi.jpg";
import adidasImage1 from "../assets/adidas1.jpg";
import Footpage from "../FootPage/Footpage";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import productsData from "../assets/products.json";
import product1 from "../assets/RP.jpg";
import product2 from "../assets/arg.jpg";
import product3 from "../assets/AZNE.jpg";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Evita errores de accesibilidad en React-Modal

const Landingpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailRegister = () => {
    alert(`Registro con email: ${email}`);
    setIsModalOpen(false);
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
      case 3:
        image = product3;
        break;
      default:
        break;
    }
    return { ...product, image, price: Number(product.price) };
  });

  return (
    <div className="landing-page">
      <NavBar />

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
          <li onClick={() => navigate("/forum")}>Forum</li>
          <li>Samba</li>
          <li>Campus</li>
          <li>Terrex</li>
          <li>River</li>
          <li>Zapatillas-hombre</li>
        </ul>
      </section>

      {/* Sección de ofertas */}
      <section className="offers">
        <h1>ÚNETE AL CLUB Y CONSIGUE 300 PUNTOS DE BIENVENIDA</h1>
        <button className="register-button" onClick={handleRegisterClick}>
          REGÍSTRATE GRATIS ➡
        </button>
      </section>

      {/* Modal de registro */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="register-modal"
        overlayClassName="register-modal-overlay"
      >
        <div className="modal-content">
          <h2>Únete al Club</h2>
          <button className="social-login">Iniciar sesión con Apple</button>
          <button className="social-login">Iniciar sesión con Facebook</button>
          <button className="social-login">Iniciar sesión con Google</button>
          <h3>Regístrate con tu correo electrónico</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
          />
          <button onClick={handleEmailRegister}>Registrarse</button>
          <button onClick={handleCloseModal}>Cerrar</button>
        </div>
      </Modal>

      {/* Sección de productos */}
      <section className="products-section">
        <h1>Productos</h1>
        <div className="products-grid">
          {productsWithImages.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Sección de carrito */}
      <section className="cart-section">
        <Cart />
      </section>

      {/* Footer */}
      <footer className="footer">
        <Footpage />
      </footer>
    </div>
  );
};

export default Landingpage;
