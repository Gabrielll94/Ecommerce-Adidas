import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo_Adidas.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { cartContext } from "../ShoppingCart/cartContext";
import Carousel from "../Carousel/Carousel";

const NavBar = ({ setShowLoginModal }) => {
  const { cartItems } = useContext(cartContext);
  const [activePanel, setActivePanel] = useState("");

  const handleMouseEnter = (panel) => setActivePanel(panel);
  const handleMouseLeave = () => setActivePanel("");

  return (
    <>
      <nav className="navbar">
        <Carousel />
        <div className="top-section">
          <div className="logo-container">
            <a href="/">
              <img src={Logo} alt="Adidas Logo" className="logo" />
            </a>
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
                <div className="submenu">
                  <a href="mujer/zapatillas/calzado" className="submenu tittle">
                    Calzado ▸
                  </a>
                  <div className="submenu-content">
                    <a href="/mujer/calzado/30-off">Hasta 30% off</a>
                    <a href="/mujer/calzado/zapatillas">Zapatillas</a>
                    <a href="/mujer/calzado/outdoor">Outdoor</a>
                    <a href="/mujer/calzado/menos-99999">Menos de 99.999</a>
                  </div>
                </div>
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
                <div className="submenu">
                  <a
                    href="/hombre/novedades/encontra-a-tu-equipo"
                    className="submenu-title"
                  >
                    Encontra a tu equipo ▸
                  </a>
                  <div className="submenu-content">
                    <a href="/hombre/novedades/encontra a tu equipo/seleccion-argentina">
                      Seleccion Argentina
                    </a>
                    <a href="/hombre/novedades/encontra a tu equipo/river-plate">
                      River Plate ⚪🔴⚪
                    </a>
                    <a href="/hombre/novedades/encontra a tu equipo/boca">
                      Boca Juniors 🔵🟡
                    </a>
                  </div>
                </div>
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
    </>
  );
};

export default NavBar;
