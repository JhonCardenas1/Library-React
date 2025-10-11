import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = login(values.email, values.password);

    if (result.success) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setError(result.message);
      setLoading(false);
    }
  };

  return {
    values,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
}
