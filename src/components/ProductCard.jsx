
export default function ProductCard({ producto, onAgregar, onVerDetalles }) {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button onClick={() => onAgregar({ ...producto, cantidad: 1 })}>Agregar al carrito</button>
      <button onClick={onVerDetalles}>Ver detalles</button>
      
    </div>
  )
}
