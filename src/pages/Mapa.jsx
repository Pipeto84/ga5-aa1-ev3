import logo from "../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
import "../styles/Mapa.css";

export const Mapa = () => {
  return (
    <div className="mapa">
      <img src={logo} className="logo" alt="logo" />
      <p className="tituloMapa">Mapa de navegación</p>
      <ul className="lista">
        <li>
          <NavLink to="/" className="nav-link-mapa">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" className="nav-link-mapa">
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" className="nav-link-mapa">
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/ingresar" className="nav-link-mapa">
            Iniciar sesión
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
