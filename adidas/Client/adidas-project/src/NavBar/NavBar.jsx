import React, { useState } from "react";
import Logo from "../assets/Logo_Adidas.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("");

  function handleTogglePanel(panel) {
    if (activePanel === panel) {
      setIsPanelOpen(false);
      setActivePanel("");
    } else {
      setIsPanelOpen(true);
      setActivePanel(panel);
    }
  }

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
          onMouseEnter={() => handleTogglePanel("Mujer")}
        >
          <a href="/mujer">MUJER</a>
          {activePanel === "Mujer" && isPanelOpen && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Hombre")}
        >
          <a href="/hombre">HOMBRE</a>
          {activePanel === "Hombre" && isPanelOpen && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Niño")}
        >
          <a href="/nino">NIÑO</a>
          {activePanel === "Niño" && isPanelOpen && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Mundo Adidas")}
        >
          <a href="/mundo-adidas">MUNDO ADIDAS</a>
          {activePanel === "Mundo Adidas" && isPanelOpen && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Oulet")}
        >
          <a href="/oulet">OULET</a>
          {activePanel === "Oulet" && isPanelOpen && (
            <div className="dropdown-content"></div>
          )}
        </li>
      </ul>
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
