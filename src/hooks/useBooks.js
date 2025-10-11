import { useState, useEffect } from "react";
import {
  getBooks as apiGetBooks,
  getBookById as apiGetBookById,
  createBook as apiCreateBook,
  updateBook as apiUpdateBook,
  deleteBook as apiDeleteBook,
} from "../services/booksApiService";

function normalizeBook(b) {
  if (!b) return null;
  const id =
    b.id !== undefined
      ? Number(b.id)
      : b._id !== undefined
      ? Number(b._id)
      : undefined;
  return { ...b, id };
}


function extractBooksFromResponse(response) {
  if (!response) return [];
  if (Array.isArray(response)) return response;
  if (response.data?.books && Array.isArray(response.data.books))
    return response.data.books;
  if (response.books && Array.isArray(response.books)) return response.books;
  return [];
}

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingBook, setEditingBook] = useState(null);

  // Cargar libros
  useEffect(() => {
    fetchBooks();
  }, []);

 // Obtener todos los libros del backend
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await apiGetBooks();
      const raw = extractBooksFromResponse(response);
      const formatted = raw.map(normalizeBook);
      setBooks(formatted);
      setError(null);
    } catch (err) {
      console.error("❌ Error al obtener libros:", err);
      setError("Error al conectar con el servidor.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  //Agregar un nuevo libro
  const addBook = async (book) => {
    setLoading(true);
    try {
      const response = await apiCreateBook(book);
      const newRaw = response?.data?.book || response?.book || response;
      const newBook = normalizeBook(newRaw);
      setBooks((prev) => [...prev, newBook]);
      setError(null);
      return newBook;
    } catch (err) {
      console.error("❌ Error al crear libro:", err);
      setError("Error al crear el libro.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Actualizar un libro existente
  const updateBook = async (book) => {
    setLoading(true);
    try {
      const idParam = Number(book.id ?? book._id);
      const response = await apiUpdateBook(idParam, book);
      const updatedRaw = response?.data?.book || response?.book || response;
      const updatedBook = normalizeBook(updatedRaw);

      setBooks((prev) =>
        prev.map((b) => (b.id === updatedBook.id ? updatedBook : b))
      );
      setEditingBook(null);
      setError(null);
      return updatedBook;
    } catch (err) {
      console.error("❌ Error al actualizar libro:", err);
      setError("Error al actualizar el libro.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //Eliminar un libro
  const deleteBook = async (id) => {
    setLoading(true);
    try {
      const idNum = Number(id);
      await apiDeleteBook(idNum);
      setBooks((prev) => prev.filter((b) => b.id !== idNum));
      setError(null);
      return true;
    } catch (err) {
      console.error("❌ Error al eliminar libro:", err);
      setError("Error al eliminar el libro.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //Obtener un libro por ID para editar
  const fetchBookById = async (id) => {
    setLoading(true);
    try {
      const response = await apiGetBookById(Number(id));
      const raw = response?.data?.book || response?.book || response;
      const bookData = normalizeBook(raw);
      setEditingBook(bookData);
      setError(null);
      return bookData;
    } catch (err) {
      console.error("❌ Error al obtener libro por id:", err);
      setError("Error al cargar el libro.");
      setEditingBook(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //Selecciona libro para editar
  const startEditing = (book) => setEditingBook(book);

  return {
    books,
    loading,
    error,
    editingBook,
    fetchBooks,
    fetchBookById,
    addBook,
    updateBook,
    deleteBook,
    startEditing,
  };
}








