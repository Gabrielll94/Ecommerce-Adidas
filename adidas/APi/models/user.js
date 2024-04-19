const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "adidas",
  password: "olivares",
  port: 5432,
});

class User {
  static async createUser(username, email, password) {
    try {
      const query =
        "USER INTO users (username, email, password)  VALUES ($1, $2, $3)  RETURNING *";
      const values = [username, email, password];
      const results = await pool.query(query, values);
      return results.rows[0];
    } catch (error) {
      console.error("Error al crear el usuario", err);
      throw error;
    }
  }

  static async getUserByEmail(email) {
    try {
      const query = "SELECT FROM users WHERE email=$1";
      const values = [email];
      const results = await pool.query(query, values);
      return results.rows[0];
    } catch (error) {
      console.error("Error al obtener el usuario por email", err);
      throw error;
    }
  }
}

module.exports = User;
