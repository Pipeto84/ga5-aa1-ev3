import logo from "../assets/logo.jpeg";
import inicio1 from "../assets/inicio/inicio1.jpg";
import inicio2 from "../assets/inicio/inicio2.jpg";
import inicio3 from "../assets/inicio/inicio3.jpg";
import inicio4 from "../assets/inicio/inicio4.jpg";
import "../styles/Inicio.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="contInicio">
        <img src={inicio1} className="imagenInicio" alt="inicio1" />
        <p className="infoInicio">Bienvenidos a<hr/> Radiadores S&T</p>
        <img src={inicio4} className="imagenInicio" alt="inicio4" />
        <img src={inicio2} className="imagenInicio" alt="inicio2" />
        <img src={logo} className="logo" alt="logo" />
        <img src={inicio3} className="imagenInicio" alt="inicio3" />
      </div>
    </div>
  );
};
