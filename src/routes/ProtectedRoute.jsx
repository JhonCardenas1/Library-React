import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import AccessDenied from "../pages/AccessDenied"; 

export function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();

  //verifica la sesión
  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--color5)" }}>
        Verificando sesión...
      </p>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <AccessDenied />;
  }

  return children;
}

export default ProtectedRoute;
