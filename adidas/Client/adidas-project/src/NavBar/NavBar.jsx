import React, { useState } from "react";
import Logo from "../assets/Logo_Adidas.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
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
          <p>Ayuda</p>
          <p>Seguimiento de pedidos</p>
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
          {activePanel === "Hombre" && <div className="dropdown-content"></div>}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter("Niño")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/nino">NIÑO</a>
          {activePanel === "Niño" && <div className="dropdown-content"></div>}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter("Mundo Adidas")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/mundo-adidas">MUNDO ADIDAS</a>
          {activePanel === "Mundo Adidas" && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter("Oulet")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/oulet">OULET</a>
          {activePanel === "Oulet" && <div className="dropdown-content"></div>}
        </li>
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
