import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/fetch";
import { Link } from "react-router-dom";

export default function LoginContent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUser(email, password);

            // Guardar token si tu backend devuelve uno
            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            navigate("/profile");
        } catch (err) {
            setError(err.message || "Error al iniciar sesión");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{ backgroundColor: "#0d6efd" }}
        >
            <div style={{ minWidth: "320px" }}>
                <form
                    style={{
                        borderRadius: "16px",
                        padding: "2rem",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    }}
                >
                    <h1 className="text-center mb-4" style={{ color: "#0d6efd" }}>
                        Iniciar Sesión
                    </h1>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-secondary">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control rounded"
                            id="email"
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-secondary">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control rounded"
                            id="password"
                            placeholder="********"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 rounded"
                        style={{ padding: "0.6rem", fontWeight: "500" }}
                    >
                        Iniciar Sesión
                    </button>

                    <p className="text-center mt-3 text-muted">
                        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
