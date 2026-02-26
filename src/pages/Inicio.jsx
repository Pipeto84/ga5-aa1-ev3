import logo from '../assets/logo.jpeg'
import "../styles/Inicio.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <h1 className='infoInicio'>Bienvenidos a Radiadores S&T</h1>
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};
