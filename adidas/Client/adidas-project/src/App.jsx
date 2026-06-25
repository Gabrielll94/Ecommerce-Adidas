import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage/landingpage.jsx";
import { CartProvider } from "./ShoppingCart/cartContext.jsx";
import Faq from "./pages/Faq.jsx";
import Forum from "./Forum/Forum.jsx";
import OrderTracking from "./OrderTracking/OrderTracking.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Cart from "./Cart/Cart.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import Footpage from "./FootPage/Footpage.jsx";

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <CartProvider>
      <Router>
        <NavBar setShowLoginModal={setShowLoginModal} />

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/seguimiento-pedido" element={<OrderTracking />} />
          <Route path="/Carrousel" element={<Carousel />} />
          <Route
            path="/Cart"
            element={<Cart setShowLoginModal={setShowLoginModal} />}
          />
        </Routes>
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
                    Google
                  </button>

                  <button onClick={() => setUserName("Usuario Facebook")}>
                    Facebook
                  </button>

                  <button onClick={() => setUserName("Usuario Apple")}>
                    Apple
                  </button>
                </div>
              ) : (
                <p>¡Hola, {userName}!</p>
              )}
            </div>
          </div>
        )}
        <Footpage />
      </Router>
    </CartProvider>
  );
};

export default App;
