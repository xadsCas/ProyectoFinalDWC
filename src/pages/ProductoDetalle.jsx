import React from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import { agregarAlCarrito } from "../utils/carrito";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./ProductoDetalle.css";
import { Link } from "react-router-dom";    

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) return <p>Producto no encontrado</p>;

  const handleAgregar = () => {
    agregarAlCarrito({ ...producto, cantidad: 1 });
    Toastify({
      text: `${producto.nombre} agregado al carrito`,
      duration: 3000,
      style: { background: "green" },
    }).showToast();
  };

  return (
    <div className="detalle-producto-container">
      <img
        src={`/img/${producto.imagen}`}
        alt={producto.nombre}
        className="detalle-producto-img"
      />
      <div className="detalle-producto-info">
        <h2>{producto.nombre}</h2>
        <p className="detalle-descripcion">{producto.descripcion}</p>
        <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
        <p><strong>Categoría:</strong> {producto.categoria || "No especificada"}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
        {producto.color && <p><strong>Color:</strong> {producto.color}</p>}
        {producto.talla && <p><strong>Talla:</strong> {producto.talla}</p>}
        {producto.marca && <p><strong>Marca:</strong> {producto.marca}</p>}

        <button className="btn-agregar" onClick={handleAgregar}>
          Añadir al carrito
        </button>
        <br></br>
        <Link to={`/contacto?producto=${encodeURIComponent(producto.nombre)}`} className="btn-agregar">
  Ver detalles
</Link>

      </div>
    </div>
  );
};

export default ProductoDetalle;
