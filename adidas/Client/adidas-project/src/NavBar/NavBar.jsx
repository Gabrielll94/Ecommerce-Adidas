import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo_Adidas.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { cartContext } from "../ShoppingCart/cartContext";

const NavBar = () => {
  const { cartItems } = useContext(cartContext);
  const [activePanel, setActivePanel] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleMouseEnter = (panel) => setActivePanel(panel);
  const handleMouseLeave = () => setActivePanel("");

  return (
    <>
      <nav className="navbar">
        <div className="top-section">
          <div className="logo-container">
            <img src={Logo} alt="Adidas Logo" className="logo" />
          </div>
          <div className="top-links">
            <a href="/faq" className="top-link">
              Ayuda
            </a>
            <a href="/seguimiento-pedido" className="top-link">
              Seguimiento de pedidos
            </a>
            <span onClick={() => setShowLoginModal(true)} className="top-link">
              Unite al club
            </span>
          </div>
        </div>

        <ul className="navbar-nav">
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("Mujer")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/mujer">MUJER</a>
            {activePanel === "Mujer" && (
              <div className="dropdown-content">
                <a href="/mujer/ropa">Ropa</a>
                <a href="/mujer/zapatillas">Zapatillas</a>
                <a href="/mujer/accesorios">Accesorios</a>
                <a href="/mujer/nuevo">Nuevo</a>
              </div>
            )}
          </li>

          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("Hombre")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/hombre">HOMBRE</a>
            {activePanel === "Hombre" && (
              <div className="dropdown-content">
                <a href="/hombre/ropa">Botines</a>
                <a href="/hombre/novedades">Camisetas de Futbol</a>
                <a href="/hombre/accesorios">Bolsos y mochilas</a>
                <a href="/hombre/futbol">Running</a>
                <a href="/hombre/imperdibles">Seleccion Argentina</a>
              </div>
            )}
          </li>

          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("Niño")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/nino">NIÑO</a>
            {activePanel === "Niño" && (
              <div className="dropdown-content">
                <a href="/niño/calzado">Zapatillas</a>
                <a href="/niño/ropa">Camisetas de Futbol</a>
                <a href="/niño/deportes">Futbol</a>
                <a href="/niño/accesorios">Pelotas</a>
                <a href="/niño/imperdibles">Ropa cómoda</a>
              </div>
            )}
          </li>

          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("Mundo Adidas")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/mundo-adidas">MUNDO ADIDAS</a>
            {activePanel === "Mundo Adidas" && (
              <div className="dropdown-content">
                <a href="/mundo-adidas/ropa-originals">Ropa adicolor</a>
                <a href="/mundo-adidas/calzado-originals">Zamba</a>
                <a href="/mundo-adidas/calzado">VL Court</a>
                <a href="/mundo-adidas/ropa">Adidas Z.N.E.</a>
                <a href="/mundo-adidas/futbol">Calzado fútbol</a>
                <a href="/mundo-adidas/running">Calzado running</a>
                <a href="/mundo-adidas/entrenamiento">Ropa training</a>
                <a href="/mundo-adidas/moda-sostenible">Colección sostenible</a>
                <a href="/mundo-adidas/adi-club">Iniciá sesión</a>
              </div>
            )}
          </li>

          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("Oulet")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/oulet">OULET</a>
            {activePanel === "Oulet" && (
              <div className="dropdown-content">
                <a href="/oulet/mujer">Mujer</a>
                <a href="/oulet/hombre">Hombre</a>
                <a href="/oulet/niños">Niños</a>
              </div>
            )}
          </li>

          <div className="search-bar-container">
            <SearchBar />
            <div className="cart-icon">
              <a href="/cart">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className="cart-count">{cartItems.length}</span>
              </a>
            </div>
          </div>
        </ul>
      </nav>

      {/* MODAL LOGIN */}
      {showLoginModal && (
        <div className="login-modal">
          <div className="login-box">
            <button
              className="close-button"
              onClick={() => setShowLoginModal(false)}
            >
              X
            </button>
            <h3>Iniciá sesión</h3>

            {!userName ? (
              <div className="social-buttons">
                <button onClick={() => setUserName("Usuario Google")}>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google"
                  />
                </button>
                <button onClick={() => setUserName("Usuario Facebook")}>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook"
                  />
                </button>
                <button onClick={() => setUserName("Usuario Apple")}>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                    alt="Apple"
                  />
                </button>
              </div>
            ) : (
              <p>¡Hola, {userName}!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
