import "./Library.css";
import { Link } from "react-router";
import { useBooks } from "../hooks/useBooks";
import { BookList } from "../components/BookList";
import { useState } from "react";
import { ConfirmDialog } from "../components/ConfirmDialog";

export function Library() {
  const { books, deleteBook, loading, error } = useBooks();
  const [bookToDelete, setBookToDelete] = useState(null);

  const handleDelete = (id) => {
    setBookToDelete(id);
  };

  const confirmDelete = async () => {
    try {
      await deleteBook(bookToDelete);
    } catch (err) {
      console.error(err);
    } finally {
      setBookToDelete(null);
    }
  };

  const cancelDelete = () => setBookToDelete(null);

  return (
    <div className="biblioteca-contenedor">
      <div className="biblioteca-encabezado">
        <h2>Biblioteca libros existentes</h2>
        <Link to="/agregar" className="biblioteca-btn-agregar">📚 Agregar Libro</Link>
      </div>

      {loading && <p>Cargando libros...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <BookList books={books} onDelete={handleDelete} />

      {bookToDelete && (
        <ConfirmDialog
          mensaje="¿Seguro que deseas eliminar este libro?"
          onConfirmar={confirmDelete}
          onCancelar={cancelDelete}
        />
      )}
    </div>
  );
}

export default Library;












