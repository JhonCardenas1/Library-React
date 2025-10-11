import "./bookCard.css";

export function BookCard({ title, image, author, description, price, onReserve }) {
  return (
    <article className="libro__contenedor">
      <h3 className="libro__titulo">{title}</h3>

      <div className="libro__imagen-contenedor">
        <img
          className="libro__imagen"
          src={image}
          alt={`Portada del libro ${title}`}
        />
      </div>

      <p className="libro__autor">
        <strong>Autor:</strong> {author}
      </p>

      <p className="libro__descripcion">
        <strong>Descripción:</strong> {description}
      </p>

      <p className="libro__precio">
        <strong>Precio: $</strong>
        {price}
      </p>

      <button
        className="libro__boton"
        aria-label={`Comprar ${title}`}
        onClick={onReserve}
      >
        Comprar
      </button>
    </article>
  );
}

export default BookCard;
