import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import CerrarSesion from "./CerrarSesion";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Tenis insanos</h2>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/inventario">Inventario</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><CerrarSesion /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
