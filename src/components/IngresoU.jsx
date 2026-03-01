import "../styles/IngresoU.css"

export function IngresoU() {
    const handleRegresar = () => {
    window.location.href = "/";
  }
  return (
    <div className="ingresoU">
      <div className="contenido-ingresoU">
        <h3 className="titulo-ingresoU">Bienvenido</h3>
        <h5 className="texto-ingresoU">Tu ingreso fue exitoso</h5>
        <button className="boton-ingresoU" onClick={handleRegresar}>Regresar</button>
      </div>
    </div>
  );
}
