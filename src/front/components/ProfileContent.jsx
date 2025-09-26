import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getProfile } from "../services/fetch.js";

export default function ProfileContent() {
  const [error, setError] = useState("");
  const { store, dispatch } = useGlobalReducer()


  useEffect(() => {
    getProfile(dispatch);
  }, []);



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
        {!store.user_profile ? <p>Cargando... </p> :
          <div>
            <h3>ID: {store.user_profile.id}</h3>
            <h3>Email: {store.user_profile.email}</h3>
          </div>
        }
      </div>
    </div>
  );
}


