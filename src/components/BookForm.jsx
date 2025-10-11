import "./BookForm.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useBooks } from "../hooks/useBooks";


export function BookForm() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, addBook, updateBook } = useBooks();

  const bookToEdit = id ? books.find((b) => b.id === Number(id)) : null;

  const [values, setValues] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setValues(bookToEdit);
    }
  }, [bookToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (id) {
      updateBook({ ...values, id: Number(id) });
    } else {
      addBook(values);
    }

    setTimeout(() => {
      setLoading(false);
      navigate("/biblioteca");
    }, 2000);
  };

  return (
    <div className="pagina-crear-libro">
      <h2>{id ? "Formulario para editar libro" : "Formulario para agregar libro"}</h2>
      <form className="formulario-libro" onSubmit={handleSubmit}>
        <fieldset className="formulario-libro__fieldset">
          <legend className="formulario-libro__titulo">
            {id ? "Editar Libro" : "Formulario de Libros"}
          </legend>

          <div className="formulario-libro__grupo">
            <label htmlFor="title" className="formulario-libro__etiqueta">
              Título
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="formulario-libro__entrada"
              value={values.title}
              onChange={handleChange}
              placeholder="Agregar título"
              required
            />
          </div>

          <div className="formulario-libro__grupo">
            <label htmlFor="author" className="formulario-libro__etiqueta">
              Autor
            </label>
            <input
              id="author"
              name="author"
              type="text"
              className="formulario-libro__entrada"
              value={values.author}
              onChange={handleChange}
              placeholder="Agregar autor"
              required
            />
          </div>

          <div className="formulario-libro__grupo">
            <label htmlFor="description" className="formulario-libro__etiqueta">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              className="formulario-libro__entrada"
              value={values.description}
              onChange={handleChange}
              placeholder="Agregar descripción"
              required
            />
          </div>

          <div className="formulario-libro__grupo">
            <label htmlFor="price" className="formulario-libro__etiqueta">
              Precio
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="formulario-libro__entrada"
              value={values.price}
              onChange={handleChange}
              placeholder="Agregar precio"
              required
            />
          </div>

          <div className="formulario-libro__grupo">
            <label htmlFor="image" className="formulario-libro__etiqueta">
              URL de la imagen
            </label>
            <input
              id="image"
              name="image"
              type="url"
              className="formulario-libro__entrada"
              value={values.image}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>

          <button
            type="submit"
            className="formulario-libro__boton"
            disabled={loading}
          >
            {loading
              ? id
                ? "Actualizando..."
                : "Guardando..."
              : id
              ? "Actualizar"
              : "Guardar"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookForm;









