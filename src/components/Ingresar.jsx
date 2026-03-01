import "../styles/Ingresar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Ingresar() {
  var Usuarios = [
    {
      Usuario: "Felipe",
      contrasena: "12345",
    },
    {
      Usuario: "CristianH",
      contrasena: "13579",
    },
    {
      Usuario: "Cristian",
      contrasena: "24680",
    },
  ];
  const [acceso, setAcceso] = useState(false);
  const [usuario, setUsuario] = useState({
    Usuario: "",
    contrasena: "",
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
      window.location.href = "/IngresoU";
    } else {
      setAcceso(false);
      window.location.href = "/ErrorU";
    }
  };

  return (
    <div className="ingresar">
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
      </div>
    </div>
  );
}
