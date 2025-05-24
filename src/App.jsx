import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Home';
import Inventario from './pages/Inventario';
import Carrito from './pages/Carrito';
import Login from './pages/Login';
import Register from './pages/Registro';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductoDetalle from "./pages/ProductoDetalle";
import Footer from "./components/footer";
import './App.css';
import Contacto from './pages/Contacto';

function App() {
  return (
   <div className="app-wrapper">
    <Router>
      <Navbar />
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </main>

      <Footer/>
      
    </Router>
    <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
