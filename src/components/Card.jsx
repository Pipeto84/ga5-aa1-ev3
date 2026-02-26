import P1 from '../assets/Products/P1.jpeg'
import "../styles/Card.css";

export const Card = ({ producto }) => {
  return (
    <div className="card">
      {/* <img className="imagen" src={`../assets/Products/${producto.id}.jpeg`} alt={producto.id} /> */}
      {/* <img className="imagen" src={P1} alt={producto.id} /> */}
      <img className="imagen" src={producto.imagen} alt={producto.id} />
      <div className="card-info">
        <h3>{producto.name}</h3>
        <p>${producto.price.toLocaleString()}</p>
        <button className="buttonComprar">Comprar</button>
      </div>
    </div>
  );
};
