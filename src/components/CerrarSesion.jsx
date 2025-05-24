import React from "react";
import { useNavigate } from "react-router-dom";

const CerrarSesion = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuario"); // Elimina usuario del almacenamiento
    navigate("/login"); // Redirige al login
  };

  return (
    <button onClick={handleLogout} style={{ padding: "10px 20px", backgroundColor: "crimson", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      Cerrar sesión
    </button>
  );
};

export default CerrarSesion;
