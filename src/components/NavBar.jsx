import {NavLink} from 'react-router-dom'
import "../styles/NavBar.css"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Inicio</NavLink>
      <NavLink to="/productos" className="nav-link">Productos</NavLink>
      <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
      <NavLink to="/sesion" className="nav-link">Iniciar sesión</NavLink>
    </nav>
  )
}
