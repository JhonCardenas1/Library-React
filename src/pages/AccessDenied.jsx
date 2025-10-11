import { Link } from "react-router";
import "./AccessDenied.css";

export function AccessDenied() {
  return (
    <div className="pagina-denegada">
      <div className="denegado__contenedor">
        <h2 className="denegado__titulo">🚫 Acceso denegado</h2>
        <p className="denegado__mensaje">
          No tienes permisos para acceder a esta sección.
        </p>
        <Link to="/" className="denegado__boton">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default AccessDenied;
