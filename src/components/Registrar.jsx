import { useState } from "react";
import "../styles/Registrar.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addUsuario } from "../features/usuarios/usuariosSlice";

export function Registrar() {
  const dispatch = useDispatch();
  const [agregado, setAgregado] = useState(false);
  const [newUser, setNewUser] = useState({
    Usuario: "",
    contrasena: "",
  });
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    setAgregado(true);
    dispatch(addUsuario(newUser));
    setNewUser({ Usuario: "", contrasena: "" });
  };

  return (
    <div className="registro">
      {agregado && (
        <div className="contenido-agregado">
          <h3 className="titulo-agregado">Exelente</h3>
          <h5 className="texto-agregado">
            Tu usuario fue agregado correctamente
          </h5>
          <NavLink to="/" className="boton-agregado">
            Regresar
          </NavLink>
        </div>
      )}
      {!agregado && (
        <div className="contenido-registro">
          <h3 className="titulo-registro">Nuevo usuario</h3>
          <div className="formulario-registro">
            <label className="label-registro">Nombre</label>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              className="input-registro"
            />
            <label className="label-registro">Apellido</label>
            <input
              type="text"
              placeholder="Escribe tu apellido
          "
              className="input-registro2"
            />
            <label className="label-registro">Telefono</label>
            <input
              type="text"
              placeholder="Escribe tu telefono"
              className="input-registro3"
            />
            <label className="label-registro">Fecha de nacimiento</label>
            <input
              type="date"
              placeholder="Escribe tu fecha de nacimiento"
              className="input-registro4"
            />
            <label className="label-registro">Usuario</label>
            <input
              type="text"
              placeholder="Escribe tu usuario"
              className="input-registro5"
              onChange={handleChange}
              name="Usuario"
            />
            <label className="label-registro">Contrasena</label>
            <input
              type="text"
              placeholder="Escribe tu contrasena"
              className="input-registro6"
              onChange={handleChange}
              name="contrasena"
            />
          </div>
          <button className="boton-registro" onClick={handleSubmit}>
            Registrar
          </button>
        </div>
      )}
    </div>
  );
}
