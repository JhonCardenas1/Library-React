import "./BookItem.css";
import { Link } from "react-router";

export function BookItem({ book, onDelete }) {
  return (
    <div className="tarjeta-libro">
      <h3 className="tarjeta-libro__titulo">{book.title}</h3>

      {book.image && (
        <div className="tarjeta-libro__imagen-contenedor">
          <img src={book.image} alt={book.title} className="tarjeta-libro__imagen" />
        </div>
      )}

      <p className="tarjeta-libro__autor"><strong>Autor: </strong>{book.author}</p>
      <p className="tarjeta-libro__descripcion"><strong>Descripcion: </strong>{book.description}</p>
      <p className="tarjeta-libro__precio">Precio: $ {book.price}</p>

      <div className="tarjeta-libro__acciones">
        <Link to={`/agregar/${book.id}`} className="tarjeta-libro__btn-editar">✏️ Editar</Link>
        <button
          type="button"
          onClick={() => onDelete(book.id)}
          className="tarjeta-libro__btn-eliminar"
        >
          🗑 Eliminar
        </button>
      </div>
    </div>
  );
}

export default BookItem;





