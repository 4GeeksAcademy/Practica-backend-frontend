import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/fetch";

export default function RegisterContent() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await registerUser(email, password);
      navigate("/login");
    } catch (error) {
      setError("Error al registrar usuario. Inténtalo de nuevo.");
    }
  };



  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#0d6efd" }}>

      <div style={{ minWidth: "320px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            borderRadius: "16px",
            padding: "2rem",               // espacio interior amplio
            backgroundColor: "#ffffff",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)", // sombra suave y elegante
          }}
        >
          <h1 className="text-center mb-4" style={{ color: "#0d6efd" }}>Regístrate</h1>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-secondary">Email</label>
            <input
              type="email"
              className="form-control rounded"
              id="email"
              placeholder="tu@email.com"
              value={email}   // 👈 Conectado al estado
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-secondary">Contraseña</label>
            <input
              type="password"
              className="form-control rounded"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded"
            style={{ padding: "0.6rem", fontWeight: "500" }}
          >
            Registrarse
          </button>

          <p className="text-center mt-3 text-muted">
            Si ya tienes una cuenta, <Link to="/login">Iniciar sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
