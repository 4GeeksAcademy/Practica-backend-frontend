import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/fetch'

function Register() {

const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [error, setError]=useState("")
const navigate = useNavigate()


const handleRegister = async () => {


  try{
    await registerUser(email, password);
    navigate("/login");
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
        <h2 className='mb-4'>Página de registro</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  />
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
            <button onClick={ () => handleRegister() } className="btn btn-success w-100">Regístrate</button>
        
          </div>
      </div>
    </div>
  )
}

export default Register
