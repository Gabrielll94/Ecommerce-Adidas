import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo_Adidas.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { cartContext } from "../ShoppingCart/cartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { cartItems } = useContext(cartContext);
  const [activePanel, setActivePanel] = useState("");

  const handleMouseEnter = (panel) => {
    setActivePanel(panel);
  };

  const handleMouseLeave = () => {
    setActivePanel("");
  };

  return (
    <nav className="navbar">
      <div className="top-section">
        <div className="logo-container">
          <img src={Logo} alt="Adidas Logo" className="logo" />
        </div>
        <div className="top-links">
          <a href="/faq">Ayuda</a>
          <a href="/seguimiento-pedido">Seguimiento de pedidos</a>
          <p>Unite al club</p>
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
              <a href="/mujer/ropa">Zapatillas</a>
              <a href="/mujer/ropa">Accesorios</a>
              <a href="/mujer/ropa">Nuevo</a>
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
              <a href="/niño/imperdibles">Ropa comoda</a>
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
              <a href="/mundo-adidas/futbol">Calzado futbol</a>
              <a href="/mundo-adidas/running">Calzado running</a>
              <a href="/mundo-adidas/entrenamiento">Ropa trainning</a>
              <a href="/mundo-adidas/accesorios"></a>
              <a href="/mundo-adidas/moda-sostenible">Coleccion sostenible</a>
              <a href="/mundo-adidas/adi-club">Iniciá-sesión</a>
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
              <a href="/oulet/Mujer">Todo el Calzado</a>
              <a href="/oulet/Mujer">Zapatillas</a>
              <a href="/oulet/Mujer">Lifestyle</a>
              <a href="/oulet/Mujer">Running</a>
              <a href="/oulet/Hombre">Todo el Calzado</a>
              <a href="/oulet/Hombre">Zapatillas</a>
              <a href="/oulet/Hombre">Lifestyle</a>
              <a href="/oulet/Hombre">Running</a>
              <a href="/oulet/Niños">Todo el Calzado</a>
              <a href="/oulet/Niños">Zapatillas</a>
              <a href="/oulet/Niños">Lifestyle</a>
              <a href="/oulet/Niños">Botines</a>
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
  );
};

export default NavBar;
