import "../styles/Ingresar.css";

export function Ingresar() {
  return (
    <div className="ingresar">
      <div className="contenido-ingresar">
        <h3 className="titulo-ingresar">Iniciar Sesion</h3>
        <div className="formulario-ingresar">
          <label className="label-ingresar1">Email</label>
          <input type="text" placeholder="Escribe tu email" className="input-ingresar1"/>
          <label className="label-ingresar2">Contrasena</label>
          <input type="text" placeholder="Escribe tu contrasena" className="input-ingresar2"/>
        </div>
          <button className="boton-ingresar">Ingresar</button>
          <a className="link-registro" href="/registro">Registrarse</a>
      </div>
    </div>
  );
}
