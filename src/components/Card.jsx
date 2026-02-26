import P1 from "../assets/Products/P1.jpeg";
import "../styles/Card.css";

export const Card = ({ producto }) => {
  return (
    <div className="card">
      <img className="imagen" src={producto.imagen} alt={producto.id} />
      <div className="card-info">
        <h3>{producto.name}</h3>
        <div className="valor-comprar">
          <p className="card-precio">${producto.price.toLocaleString()}</p>
          <button className="button-buy">Comprar</button>
        </div>
      </div>
    </div>
  );
};
