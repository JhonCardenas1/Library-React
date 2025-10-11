import "./catalog.css";
import { BookCard } from "./BookCard";
import { useBooks } from "../hooks/useBooks";
import { useState, useEffect } from "react";

export function Catalog() {
  const { books } = useBooks();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(books)) {
      setLoading(false);
    }
  }, [books]);

  return (
    <section className="catalogo">
      <h2 className="catalogo__titulo">Catálogo de Libros</h2>

      {loading ? (
        <div className="catalogo__spinner-contenedor">
          <div className="catalogo__spinner"></div>
          <p className="catalogo__loader-texto">Cargando libros...</p>
        </div>
      ) : Array.isArray(books) && books.length > 0 ? (
        books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            image={
              book.image && book.image.trim() !== ""
                ? book.image
                : "/img/default-book.jpg"
            }
            author={book.author}
            description={book.description}
            price={book.price}
            onReserve={() => console.log(`Comprado: ${book.title}`)}
          />
        ))
      ) : (
        <p className="catalogo__vacio">No hay libros disponibles.</p>
      )}
    </section>
  );
}

export default Catalog;