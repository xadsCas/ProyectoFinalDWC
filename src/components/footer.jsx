import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Tenis insanos. Todos los derechos reservados.</p>
      <div className="redes">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}
