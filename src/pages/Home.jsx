import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bienvenido a <span className="highlight">Tenis insanos 👟</span></h1>
        <p>Descubre los mejores tenis a los mejores precios.</p>
        <div className="home-buttons">
          <Link to="/inventario" className="btn-primary">Ver Inventario</Link>
          <Link to="/contacto" className="btn-secondary">Contacto</Link>
        </div>
      </div>
    </div>
  );
}
