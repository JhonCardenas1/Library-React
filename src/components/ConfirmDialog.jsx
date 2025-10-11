import "./ConfirmDialog.css";

export function ConfirmDialog({ mensaje, onConfirmar, onCancelar }) {
  return (
    <div className="dialogo-confirmacion-fondo">
      <div className="dialogo-confirmacion">
        <p>{mensaje}</p>
        <div className="dialogo-confirmacion__acciones">
          <button className="dialogo-confirmacion__btn-cancelar" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="dialogo-confirmacion__btn-eliminar" onClick={onConfirmar}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;