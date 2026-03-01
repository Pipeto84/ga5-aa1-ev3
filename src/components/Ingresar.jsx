import "../styles/Ingresar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { setUser } from "../features/user/userSlice";

export function Ingresar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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
    {
      Usuario: "q",
      contrasena: "1",
    },
  ];
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
      setUsuario({...usuario, acceso: true});
      dispatch(setUser({...usuario, acceso: true}));
      // window.location.href = "/IngresoU";
      console.log(user)
    } else {
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
