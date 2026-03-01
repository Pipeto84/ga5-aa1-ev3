import "../styles/IngresoU.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export function IngresoU() {
  const user = useSelector((state) => state.user);
  const handleRegresar = () => {
    window.location.href = "/";
  };
  console.log(user);
  return (
    <div className="ingresoU">
      <div className="contenido-ingresoU">
        <h3 className="titulo-ingresoU">Bienvenido</h3>
        <h5 className="texto-ingresoU">Tu ingreso fue exitoso</h5>
        <NavLink to="/" className="boton-ingresoU">
          Regresar
        </NavLink>
        <button className="boton-ingresoU" onClick={handleRegresar}>
          Regresar
        </button>
      </div>
    </div>
  );
}
