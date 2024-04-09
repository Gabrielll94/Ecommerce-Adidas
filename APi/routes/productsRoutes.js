const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Obtener todos los productos");
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.send("Producto con id " + productId);
});

module.exports = router;
