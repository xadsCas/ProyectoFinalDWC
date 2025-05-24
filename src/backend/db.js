const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',       // si no cambiaste la contraseña por defecto
  database: 'tenis'
});

module.exports = db;
