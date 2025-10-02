const backendUrl = import.meta.env.VITE_BACKEND_URL  // esto me trae la URL del backend directamente del .env 


export const userLogin = async (email, password) =>{
try {
    const res = await fetch(`${backendUrl}/api/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ "email": email, "password": password })
    });

    if (!res.ok){
        throw new Error("Error al iniciar sesión");
    }

    const data = await res.json()

    localStorage.setItem("token", data.token)  
    // GUARDAMOS EL TOKEN EN EL LOCAL STORAGE PARA LUEGO PODER USARLO
    // ES LA UNICA DIFERENCIA CON EL FETCH DEL REGISTER   

        return data;

} catch (error) {
    console.error("Error:", error);
    throw error;
    
}
}


export const registerUser = async (email, password) => {
    try {
        const response = await fetch(`${backendUrl}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ "email": email, "password": password }),
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


export const userProfile= async (dispatch) => {
    //vamos a trabajar con el STORE para almacenar los datos que me devuelva este fetch
    const token = localStorage.getItem("token") 
    //igualo una variable a dentro de mi localstorage a lo que tiene el valor de token
    //y de aqui es donde sacamos el token que utilizo en la linea 68
    try {
        const response = await fetch(`${backendUrl}/api/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${token}`
            },
            body: JSON.stringify({ "email": email, "password": password }),
        });

        if (!response.ok) {
            throw new Error("Fallo al registrar usuario");
        }

        const data = await response.json();
        
        dispatch({
            type: "set_user_profile",
            payload: data
        })
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};



//en el fetch del profile tengo que enviar el token authetication   bearer token