const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Registro de usuario exitoso!");
});

router.post("/login", (req, res) => {
  res.send("Inicio de sesión correcto");
});

router.get("/logout", (req, res) => {
  res.send("Sesión cerrada con éxito");
});

module.exports = router;
