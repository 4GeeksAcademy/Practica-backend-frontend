const URL_BASE="https://stunning-funicular-jj9q5r5pjvv72r4g-3001.app.github.dev/api"

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${URL_BASE}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error("Fallo al iniciar sesión");
        }

        const data = await response.json();
        return data; // Assuming the token is in data.token
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};


export const registerUser = async (email, password) => {
    try {
        const response = await fetch(`${URL_BASE}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error("Fallo al registrar usuario");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

    export const getProfile = async (dispatch) => {
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
        dispatch({ type: "set_user_profile", payload: data });
      } catch (err) {
        setError(err.message);
      }
    };









// headers: {
//         Authorization: `Bearer ${token}`,
//       },