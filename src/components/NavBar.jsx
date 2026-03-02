import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Inicio
      </NavLink>
      <NavLink to="/productos" className="nav-link">
        Productos
      </NavLink>
      <NavLink to="/nosotros" className="nav-link">
        Nosotros
      </NavLink>
      {
        user.acceso && (
          <NavLink to="/sesion" className="nav-link-user">
            {user.Usuario}
          </NavLink>
        )
      }
      {
        !user.acceso && (
          <NavLink to="/sesion" className="nav-link">
            Iniciar Sesión
          </NavLink>
        )
      }
    </nav>
  );
};
