import { Link } from "react-router";
import "./NotFound.css";

export function NotFound() {
  return (
    <div className="notfound-contenedor">
      <h2 className="notfound-titulo">404 Not Found</h2>
      <p className="notfound-texto">La página que buscas no existe.</p>
      <Link to="/" className="notfound-link">
        Volver a la página principal
      </Link>
    </div>
  );
}

export default NotFound;
