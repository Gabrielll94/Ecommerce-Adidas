const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  res.send("Adding a new product...");
});

router.delete("/remove/:id", (req, res) => {
  let productId = req.params.id;
  res.send("Producto con ID  " + productId + " eliminado!");
});

router.get("/", (req, res) => {
  res.send("Mostrando todos los productos...");
});

module.exports = router;
