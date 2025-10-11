import { apiRequest } from "./apiClient";

const BOOKS_ENDPOINT = "/books";

export async function getBooks() {
  return await apiRequest(BOOKS_ENDPOINT, { method: "GET" });
}

export async function getBookById(id) {
  return await apiRequest(`${BOOKS_ENDPOINT}/${id}`, { method: "GET" });
}

export async function createBook(bookData) {
  return await apiRequest(BOOKS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(bookData),
  });
}

export async function updateBook(id, bookData) {
  try {
    return await apiRequest(`${BOOKS_ENDPOINT}/${id}`, {
      method: "PUT",
      body: JSON.stringify(bookData),
    });
  } catch (err) {
    console.warn("PUT falló, intentando PATCH...", err);
    return await apiRequest(`${BOOKS_ENDPOINT}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(bookData),
    });
  }
}

export async function deleteBook(id) {
  return await apiRequest(`${BOOKS_ENDPOINT}/${id}`, {
    method: "DELETE",
  });
}

