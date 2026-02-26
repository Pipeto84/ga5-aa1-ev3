import { Card } from "../components/Card";
import P1 from "../assets/Products/P1.jpeg";
import P2 from "../assets/Products/P2.jpeg";
import P3 from "../assets/Products/P3.jpeg";
import P4 from "../assets/Products/P4.jpeg";
import P5 from "../assets/Products/P5.jpeg";
import P6 from "../assets/Products/P6.jpeg";
import P7 from "../assets/Products/P7.jpeg";
import P8 from "../assets/Products/P8.jpeg";
import "../styles/Productos.css";

const productos = [
  {
    id: "P1",
    name: "Radiador Jeep Wrangler",
    price: 600000,
    imagen: P1,
  },
  {
    id: "P2",
    name: "Radiador Honda Niche High Capacity",
    price: 239649,
    imagen: P2,
  },
  {
    id: "P3",
    name: "Radiador Champion Cooling Systems MC6062 All Aluminum 1960",
    price: 1162196,
    imagen: P3,
  },
  {
    id: "P4",
    name: 'Radiador 26.06" Kia Spectra',
    price: 285048,
    imagen: P4,
  },
  {
    id: "P5",
    name: "Radiador Spectra Premium cu2458",
    price: 531584,
    imagen: P5,
  },
  {
    id: "P6",
    name: "Radiador Hose Bottom Right",
    price: 288628,
    imagen: P6,
  },
  {
    id: "P7",
    name: "Radiador Engine Water Coolant Pipe Hose",
    price: 55322,
    imagen: P7,
  },
  {
    id: "P8",
    name: "Radiador Bracket Cushion Seat ",
    price: 48000,
    imagen: P8,
  },
];

export const Productos = () => {
  return (
    <div className="productos">
      <h1 className="titulo">Productos</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};
