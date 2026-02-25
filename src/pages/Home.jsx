import logo from '../assets/logo.jpeg'
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="home">
      <h1 className='infoHome'>Bienvenidos a Radiadores S&T</h1>
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};
