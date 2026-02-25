import {NavLink} from 'react-router-dom'
import "../styles/NavBar.css"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/productos" className="nav-link">Productos</NavLink>
      <NavLink to="/contactos" className="nav-link">Contactos</NavLink>
    </nav>
  )
}
