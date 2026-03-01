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
  ]
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
          <label className="label-ingresar2">Contrasena</label>
          <input
            type="text"
            placeholder="Escribe tu contrasena"
            className="input-ingresar2"
            onChange={handleChange}
            name="contrasena"
          />
        </div>
        <button className="boton-ingresar" onClick={() => console.log(usuario)}>Ingresar</button>
        <NavLink to="/registrar" className="registro-link">
          Registrarse
        </NavLink>
      </div>
    </div>
  );
}
