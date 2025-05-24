import React, { useState } from "react";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
import "toastify-js/src/toastify.css";
import "./registro.css";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3001/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      Toastify({
        text: "Registro exitoso",
        duration: 3000,
        style: { background: "green" },
      }).showToast();

      setTimeout(() => navigate("/Login"), 1000);
    } else if (res.status === 400) {
      // Este es el caso cuando el email ya existe
      Toastify({
        text: data.mensaje || "El email ya está registrado",
        duration: 3000,
        style: { background: "orange" },
      }).showToast();
    } else {
      Toastify({
        text: data.mensaje || "Error en el registro",
        duration: 3000,
        style: { background: "red" },
      }).showToast();
    }
  } catch (error) {
    Toastify({
      text: "Error de conexión con el servidor",
      duration: 3000,
      style: { background: "red" },
    }).showToast();
  }
};

  return (
    <div className="registro-container">
      <form onSubmit={handleSubmit} className="registro-form">
        <h2 className="registro-title">Crear Cuenta</h2>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          required
          className="registro-input"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="registro-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="registro-input"
        />
        <button type="submit" className="registro-button">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Registro;
