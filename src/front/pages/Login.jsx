
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../services/fetch'

function Login() {

const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [error, setError]=useState("")
const navigate = useNavigate()

const handleLogin = async () => {


  try{
    await userLogin(email, password);
    // navigate("/profile");
    setEmail("")
    setPassword("")
  }
  catch (error){
    // setError("Error en el registro, inténtalo de nuevo")
    console.log("Error:", error)
  }
}


  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#d4edda" }}
    >
      <div className="p-4 rounded shadow bg-white">
        <h2 className='mb-4'>Iniciar sesión</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email"
           className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
            //para setear el valor inicial con el valor entrado en el input
             
             />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password"
           className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
            />
        </div>

        <div className="mb-3 form-check">
        </div>
        <div>
          
        </div>
        <button onClick={()=> handleLogin() } className="btn btn-success w-100">Enviar</button>

        <p>Si no tienes cuenta</p><Link to="/register">Registrate</Link>
      </div>
    </div>
  )
}

export default Login
