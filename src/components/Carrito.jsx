import React, { useState, useEffect } from "react";
import { obtenerCarrito, eliminarDelCarrito, actualizarCarrito } from "../utils/carrito";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(obtenerCarrito());
  }, []);

  const handleEliminar = (index) => {
    eliminarDelCarrito(index);
    setCarrito(obtenerCarrito());
  };

  const handleEditar = (index) => {
    const nuevoNombre = prompt("Nuevo nombre del producto:", carrito[index].nombre);
    if (nuevoNombre) {
      const actualizado = { ...carrito[index], nombre: nuevoNombre };
      actualizarCarrito(index, actualizado);
      setCarrito(obtenerCarrito());
    }
  };

  return (
    <div>
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <ul>
          {carrito.map((producto, i) => (
            <li key={i}>
              {producto.nombre} - ${producto.precio}
              <button onClick={() => handleEliminar(i)}>Eliminar</button>
              <button onClick={() => handleEditar(i)}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
