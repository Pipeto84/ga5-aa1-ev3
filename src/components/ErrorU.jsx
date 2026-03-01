import "../styles/ErrorU.css"

export function ErrorU() {
  const handleRegresar = () => {
    window.location.href = "/sesion";
  }
  return (
    <div className="error">
      <div className="contenido-error">
        <h3 className="titulo-error">Error</h3>
        <h5 className="texto-error">El Usuario o la contraseña</h5>
        <h5 className="texto-error">son incorrectos</h5>
        <button className="boton-error" onClick={handleRegresar}>Regresar</button>
      </div>
    </div>
  );
}
