import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "./Login.css";

export function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //Usuarios locales de prueba
  const users = [
    { email: "admin@libros.com", password: "1234", role: "admin", name: "Jhon" },
    { email: "user@libros.com", password: "1234", role: "user", name: "Valentina" },
  ];


  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const foundUser = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    setTimeout(() => {
      if (foundUser) {
        login(foundUser);
        localStorage.setItem("welcomeUser", foundUser.name);
        navigate("/");
      } else {
        setError("Correo o contraseña incorrectos");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pagina-login">
      <h2>Acceso a la Biblioteca</h2>

      <form className="formulario-login" onSubmit={handleSubmit}>
        <fieldset className="formulario-login__fieldset">
          <legend className="formulario-login__titulo">Iniciar Sesión</legend>

          <div className="formulario-login__grupo">
            <label htmlFor="email" className="formulario-login__etiqueta">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="formulario-login__entrada"
              value={values.email}
              onChange={handleChange}
              placeholder="Ingrese su correo"
              required
            />
          </div>

          <div className="formulario-login__grupo">
            <label htmlFor="password" className="formulario-login__etiqueta">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="formulario-login__entrada"
              value={values.password}
              onChange={handleChange}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          {error && <p className="formulario-login__error">⚠️ {error}</p>}

          <button
            type="submit"
            className="formulario-login__boton"
            disabled={loading}
          >
            {loading ? "Iniciando..." : "Ingresar"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;





