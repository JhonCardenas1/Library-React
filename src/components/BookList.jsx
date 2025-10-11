import { BookItem } from "./BookItem";
import "./BookList.css";

export function BookList({ books, onDelete }) {
  if (books.length === 0) {
    return <p className="lista-libros__vacia">No hay libros disponibles</p>;
  }

  return (
    <div className="lista-libros">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}

