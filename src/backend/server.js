const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

// Configura tu conexión
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // tu contraseña
  database: "tenis",
});

// Registro
app.post("/api/registro", async (req, res) => {
  const { nombre, email, password } = req.body;

  // Verificar si ya existe el email
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ mensaje: "Error en la base de datos" });

    if (results.length > 0) {
      return res.status(400).json({ mensaje: "El email ya está registrado" });
    }

    // Hashear la contraseña y guardar
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
        [nombre, email, hashedPassword],
        (err2, result) => {
          if (err2) {
            return res.status(500).json({ mensaje: "Error al registrar usuario", error: err2 });
          }
          res.json({ mensaje: "Registro exitoso" });
        }
      );
    } catch (hashErr) {
      res.status(500).json({ mensaje: "Error al procesar la contraseña" });
    }
  });
});

// Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ mensaje: "Error en la base de datos" });
    if (results.length === 0) return res.status(401).json({ mensaje: "Usuario no encontrado" });

    try {
      const valid = await bcrypt.compare(password, results[0].password);
      if (!valid) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

      const { password, ...userSinPass } = results[0]; // quitar password antes de enviar
      res.json({ mensaje: "Login exitoso", usuario: userSinPass });
    } catch (compareErr) {
      res.status(500).json({ mensaje: "Error al verificar contraseña" });
    }
  });
});

app.listen(3001, () => console.log("Backend corriendo en puerto 3001"));
