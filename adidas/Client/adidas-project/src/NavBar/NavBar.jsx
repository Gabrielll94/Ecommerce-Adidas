import React, { useState } from "react";
import Logo from "../assets/Logo_Adidas.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("");

  // Funcion para manejar la apertura y cierre de los paneles
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
      {/* Logo */}
      <div className="logo-container">
        <img src={Logo} alt="Adidas Logo" className="logo" />
      </div>

      <ul className="navbar-nav">
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Mujer")}
        >
          <a href="/mujer">MUJER</a>
          {activePanel && isPanelOpen === "Mujer" && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Hombre")}
        >
          <a href="/mujer">HOMBRE</a>
          {activePanel && isPanelOpen === "Hombre" && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Niño")}
        >
          <a href="/mujer">NIÑO</a>
          {activePanel && isPanelOpen === "Niño" && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Mundo Adidas")}
        >
          <a href="/mujer">MUNDO ADIDAS</a>
          {activePanel && isPanelOpen === "Mundo Adidas" && (
            <div className="dropdown-content"></div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleTogglePanel("Oulet")}
        >
          <a href="/mujer">OULET</a>
          {activePanel && isPanelOpen === "Oulet" && (
            <div className="dropdown-content"></div>
          )}
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
