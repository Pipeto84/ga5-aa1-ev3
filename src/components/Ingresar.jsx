import "../styles/Ingresar.css";
import '../styles/IngresoU.css'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";

export function Ingresar() {
  const [acceso, setAcceso] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const Usuarios = useSelector((state) => state.usuarios);
  const [usuario, setUsuario] = useState({
    Usuario: "",
    contrasena: "",
    acceso: false,
  });
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const usuarioEncontrado = Usuarios.find(
      (u) =>
        u.Usuario === usuario.Usuario && u.contrasena === usuario.contrasena,
    );
    if (usuarioEncontrado) {
      setAcceso(true);
      setUsuario({ ...usuario, acceso: true });
      dispatch(setUser({ ...usuario, acceso: true }));
    } else {
      window.location.href = "/ErrorU";
    }
  };
  const handleCerrar = () => {
    setAcceso(false);
    setUsuario({ Usuario: "", contrasena: "", acceso: false });
    dispatch(setUser({ Usuario: "", contrasena: "", acceso: false }));
  }
  return (
    <div className="ingresar">
      {!acceso && (
        <div className="contenido-ingresar">
          <h3 className="titulo-ingresar">Iniciar Sesion</h3>
          <div className="formulario-ingresar">
            <label className="label-ingresar1">Usuario</label>
            <input
              type="text"
              placeholder="Escribe tu usuario"
              className="input-ingresar1"
              onChange={handleChange}
              name="Usuario"
            />
            <label className="label-ingresar2">Contraseña</label>
            <input
              type="text"
              placeholder="Escribe tu contraseña"
              className="input-ingresar2"
              onChange={handleChange}
              name="contrasena"
            />
          </div>
          <button className="boton-ingresar" onClick={handleSubmit}>
            Ingresar
          </button>
          <NavLink to="/registrar" className="registro-link">
            Registrarse
          </NavLink>
          <button className="boton-cerrar" onClick={handleCerrar}>Cerrar sesion</button>
        </div>
      )}
      {acceso && (
        <div className="contenido-ingresoU">
          <h3 className="titulo-ingresoU">Bienvenido</h3>
          <h5 className="texto-ingresoU">Tu ingreso fue exitoso</h5>
          <NavLink to="/" className="boton-ingresoU">
            Regresar
          </NavLink>
        </div>
      )}
    </div>
  );
}
