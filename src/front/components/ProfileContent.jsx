import { useEffect, useState } from "react";

export default function ProfileContent() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No estás autenticado");
        return;
      }

      try {
        const response = await fetch(
          "https://stunning-funicular-jj9q5r5pjvv72r4g-3001.app.github.dev/api/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener datos del perfil");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p className="text-danger text-center mt-3">{error}</p>;
  }

  if (!user) {
    return <p className="text-center mt-3">Cargando perfil...</p>;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#0d6efd" }}
    >
      <div
        style={{
          minWidth: "320px",
          padding: "2rem",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1 className="text-center mb-4" style={{ color: "#0d6efd" }}>
          Perfil de usuario
        </h1>
        <h3>ID: {user.id}</h3>
        <h3>Email: {user.email}</h3>
      </div>
    </div>
  );
}