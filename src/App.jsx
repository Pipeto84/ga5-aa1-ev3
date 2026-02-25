import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import {Footer} from './components/Footer'
import { Home } from "./pages/Home";
import { Productos } from "./pages/Productos";
import { Contactos } from "./pages/Contactos";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Contactos" element={<Contactos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
