import "../styles/Registrar.css";

export function Registrar() {

    return (
    <div className="registro">
      <div className="contenido-registro">
        <h3 className="titulo-registro">Nuevo usuario</h3>
        <div className="formulario-registro">
          <label className="label-registro">Nombre</label>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            className="input-registro"
          />
          <label className="label-registro">Apellido</label>
          <input
            type="text"
            placeholder="Escribe tu apellido
          "
            className="input-registro2"
          />
          <label className="label-registro">Telefono</label>
          <input
            type="text"
            placeholder="Escribe tu telefono"
            className="input-registro3"
          />
          <label className="label-registro">Fecha de nacimiento</label>
          <input
            type="date"
            placeholder="Escribe tu fecha de nacimiento"
            className="input-registro4"
          />
          <label className="label-registro">Usuario</label>
          <input
            type="text"
            placeholder="Escribe tu usuario"
            className="input-registro5"
          />
          <label className="label-registro">Contrasena</label>
          <input
            type="text"
            placeholder="Escribe tu contrasena"
            className="input-registro6"
          />
        </div>
        <button className="boton-registro">Registrar</button>
      </div>
    </div>
  );
}
