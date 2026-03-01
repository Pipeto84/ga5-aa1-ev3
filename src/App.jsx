import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Inicio } from "./pages/Inicio";
import { Productos } from "./pages/Productos";
import { Nosotros } from "./pages/Nosotros";
import { Mapa } from "./pages/Mapa";
import { Sesion } from "./pages/Sesion";
import {Registrar} from './components/Registrar'
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/Sesion" element={<Sesion />} />
          <Route path="/Registrar" element={<Registrar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
