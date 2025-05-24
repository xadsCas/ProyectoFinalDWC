export function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const index = carrito.findIndex(p => p.id === producto.id);
  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


export const obtenerCarrito = () => JSON.parse(localStorage.getItem("carrito")) || [];

export const eliminarDelCarrito = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

export const actualizarCarrito = (indice, productoActualizado) => {
  const carrito = obtenerCarrito();
  carrito[indice] = productoActualizado;
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
export function limpiarCarrito() {
  localStorage.setItem("carrito", JSON.stringify([]));
}
