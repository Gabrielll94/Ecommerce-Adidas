const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo desde el servidor!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
