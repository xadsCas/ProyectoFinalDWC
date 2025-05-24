import React, { useEffect, useState } from "react";
import productosData from "../data/productos.json";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./Inventario.css";
import { agregarAlCarrito } from "../utils/carrito";

const Inventario = () => {
  const [productos, setProductos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroMin, setFiltroMin] = useState("");
  const [filtroMax, setFiltroMax] = useState("");

  useEffect(() => {
    setProductos(productosData); // Cargar productos al inicio
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    const nombreValido = producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
    const precioValidoMin = filtroMin === "" || producto.precio >= parseFloat(filtroMin);
    const precioValidoMax = filtroMax === "" || producto.precio <= parseFloat(filtroMax);
    return nombreValido && precioValidoMin && precioValidoMax;
  });

  const handleAgregarCarrito = (producto) => {
    agregarAlCarrito(producto);

    Toastify({
      text: `${producto.nombre} agregado al carrito`,
      duration: 2500,
      gravity: "top", // "top" or "bottom"
      position: "right", // "left", "center" or "right"
      backgroundColor: "#4CAF50",
      close: true,
    }).showToast();
  };

  return (
    <div className="inventario-wrapper">
      <aside className="filtros">
        <h3>Filtros</h3>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio mínimo"
          value={filtroMin}
          onChange={(e) => setFiltroMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={filtroMax}
          onChange={(e) => setFiltroMax(e.target.value)}
        />
      </aside>

      <div className="inventario-container">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="card">
            <img className="producto-img" src={`/img/${producto.imagen}`} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <Link to={`/producto/${producto.id}`} className="ver-mas">Ver más</Link>
            <Link to={`/contacto?producto=${encodeURIComponent(producto.nombre)}`}>
              <button className="ver-mas-btn">Ver detalles</button>
            </Link>
            <button onClick={() => handleAgregarCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventario;
