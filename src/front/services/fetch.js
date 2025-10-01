const backendUrl = import.meta.env.VITE_BACKEND_URL  // esto me trae la URL del backend directamente del .env 


export const userLogin = async (email, password) =>{
try {
    const res = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({email, password})
    });

    if ("!res.ok"){
        throw new Error("Error al iniciar sesión");
    }

    const data = await res.json()
        return data;

} catch (error) {
    console.error("Error:", error);
    throw error;
    
}
}


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