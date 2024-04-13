const express = require("express");
const { Pool } = require("pg");
const app = express();
const productRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
app.use(express.json()); // Middleware para manejar datos JSON

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "adidas",
  password: "olivares",
  port: 5432,
});

// Manejo de errores
pool.on("error", (err, client) => {
  console.error("Error inesperado en el cliente  PostgreSQL", err);
  process.exit(-1);
});

// Verificar la conexión a PostgreSQL
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error al intentar conectar con Postgres", err);
    return;
  }
  console.log(`Conectado a ${res.rows[0]}`);
});

pool.query("SELECT FROM productos LIMIT 5", (err, res) => {
  if (err) throw err;
  console.log("Primeros 5 productos:", res.rows);
});

// Exportar el pool de conexión para que esté disponible en otros módulos si es necesario
module.exports = pool;

app.use("/products", productRoutes);
app.use("/user", userRoutes);
app.use("/shopping-cart", cartRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo desde el servidor!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
