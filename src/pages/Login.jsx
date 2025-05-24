import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.mensaje || "Error en el login");
      return;
    }

    // Guardamos solo el usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify(data.usuario));

    toast.success("Login exitoso");
    setTimeout(() => navigate("/"), 1000);
  } catch (err) {
    toast.error("Error al conectar con el servidor");
  }
};

  

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Iniciar Sesión</h2>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}
