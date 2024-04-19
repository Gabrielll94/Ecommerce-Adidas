const jwt = require("jsonwebtoken");
const User = require("./user");

const UserController = {
  async registerUser(req, res) {
    const { username, email, password } = req.body;
    try {
      const user = await User.createUser(username, email, password);
      res.status(201).json(user);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      // Verificar la contraseña (podrías usar bcrypt u otra biblioteca de hash de contraseñas)
      if (user.password !== password) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async validateToken(req, res) {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Token de autorizacion no proporcionado" });
    }
    try {
      const decoded = jwt.verify(
        token,
        "f22019876794a35d84713861cfcf77e425051463ced93a116045d31d96676390"
      );
      const user = await user.getUserById(decoded.userId);
      if (!user) {
        return res
          .statu(404)
          .json({ message: "No se encontro el usuario con ese token" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Error validando token", error);
      res.status(401).json({ message: "Token de autorizacion invalido" });
    }
  },

  async getUserProfile(req, res) {
    const userId = req.params.id;
    try {
      const user = await User.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Error al obtener perfil de usuario:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  // Otros métodos para actualizar perfil de usuario, eliminar usuario, etc.
};

module.exports = UserController;
