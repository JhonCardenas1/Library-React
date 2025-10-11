import "./header.css";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export function Header({ onToggleCart }) {
  const { user, logout } = useAuth();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <>
      <header className={`header ${menuAbierto ? "menu-abierto" : ""}`}>
        <div className="header__top">
          <h1 className="titulo__principal">Biblioteca</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <nav className="navegacion">
          {user && user.role === "admin" && (
            <Link to="/" onClick={() => setMenuAbierto(false)}>
              Inicio
            </Link>
          )}
          {/* 
          {user && user.role === "admin" && (
            <Link to="/agregar" onClick={() => setMenuAbierto(false)}>
              Agregar Libro
            </Link>
          )} 
          */}
          {user && user.role === "admin" && (
            <Link to="/biblioteca" onClick={() => setMenuAbierto(false)}>
              Ver Libros
            </Link>
          )}
        </nav>
        <div className="usuario">
          {user ? (
            <div className="usuario__info">
              <div className="usuario__nombre">👋Hola, {user.name}</div>
              <button
                type="button"
                className="usuario__logout"
                onClick={() => {
                  logout();
                  setMenuAbierto(false);
                }}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="usuario__login"
              onClick={() => setMenuAbierto(false)}
            >
              Mi cuenta
            </Link>
          )}
        </div>
        {/* 
        <div className="carrito">
          <button className="carrito__boton" onClick={onToggleCart}>
            🛒
            <span className="nombre__carrito">Carrito</span>
            <span className="contador__carrito">0</span>
          </button>
        </div>
        */}
      </header>
    </>
  );
}

export default Header;
