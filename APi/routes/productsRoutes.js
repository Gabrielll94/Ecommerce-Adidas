const express = require("express");
const router = express.Router();
const pool = require("../index");

router.get("/", (req, res) => {
  pool.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      console.error("Error al ejecutar la consulta SQL", err);
      return res.status(500).send("Error interno del servidor");
    }
    res.json(results.rows);
  });
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  pool.query(
    `SELECT * FROM productos WHERE id=$1`,
    [productId],
    (err, result) => {
      if (err) {
        console.error("Error al ejecutar la consulta SQL", err);
        return res.status(500).send("Error interno del servidor");
      }
      if (results.rows === 0) {
        res.status(404).send("No se ha encontrado el producto con ese ID");
      }
      res.json(results.rows[0]);
    }
  );
});

module.exports = router;
