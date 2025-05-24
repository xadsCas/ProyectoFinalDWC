import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./Contacto.css";

function Contacto() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const producto = query.get("producto");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      setNombre(usuario.nombre || "");
      setEmail(usuario.email || "");
    }

    if (producto) {
      setMensaje(`Hola, me gustaría más información sobre el producto: ${producto}`);
    }
  }, [producto]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mensaje) {
      Toastify({
        text: "El mensaje es obligatorio",
        style: { background: "orange" },
        duration: 3000,
      }).showToast();
      return;
    }

    Toastify({
      text: "Mensaje enviado correctamente",
      style: { background: "green" },
      duration: 3000,
    }).showToast();

    setMensaje("");
  };

  return (
    <div className="contacto-container">
      <form className="contacto-form" onSubmit={handleSubmit}>
        <h2>Contáctanos</h2>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
        
          required
        />
        <input
          type="email"
          placeholder="Tu correo"
          value={email}
      
          required
        />
        <textarea
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;
