import React, { useState, useEffect } from "react";
import {
  obtenerCarrito,
  eliminarDelCarrito,
  actualizarCarrito,
  limpiarCarrito,
} from "../utils/carrito";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./Carrito.css";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(obtenerCarrito());
  }, []);

  const handleEliminar = (index) => {
    eliminarDelCarrito(index);
    setCarrito(obtenerCarrito());
  };

  const handleCantidadChange = (index, nuevaCantidad) => {
    const actual = carrito[index];
    const actualizado = {
      ...actual,
      cantidad: Math.max(1, parseInt(nuevaCantidad) || 1),
    };
    actualizarCarrito(index, actualizado);
    setCarrito(obtenerCarrito());
  };

  const handleCompra = () => {
   const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
      Toastify({
        text: "Debes iniciar sesión para completar la compra",
        style: { background: "red" },
        duration: 700,
      }).showToast();
      return;
    }

    if (carrito.length === 0) return;

    Toastify({
      text: "¡Compra realizada con éxito!",
      style: { background: "green" },
      duration: 3000,
    }).showToast();

    limpiarCarrito();
    setCarrito([]);
  };

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="carrito-container">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <>
          <div className="carrito-items">
            {carrito.map((producto, i) => (
              <div className="carrito-card" key={i}>
                <img
                  src={`/img/${producto.imagen}`}
                  alt={producto.nombre}
                  className="carrito-img"
                />
                <div className="carrito-info">
                  <h3>{producto.nombre}</h3>
                  <p>Precio: ${producto.precio}</p>
                  <label>
                    Cantidad:
                    <input
                      type="number"
                      value={producto.cantidad}
                      min="1"
                      onChange={(e) => handleCantidadChange(i, e.target.value)}
                      className="input-cantidad"
                    />
                  </label>
                  <div className="carrito-botones">
                    <button onClick={() => handleEliminar(i)}>Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="btn-compra" onClick={handleCompra}>
              Realizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
