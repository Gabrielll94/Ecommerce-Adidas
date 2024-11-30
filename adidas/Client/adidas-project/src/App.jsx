import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage/landingpage.jsx";
import { CartProvider } from "./ShoppingCart/cartContext.jsx";
import Faq from "./pages/Faq.jsx";
import Forum from "./Forum/Forum.jsx";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
