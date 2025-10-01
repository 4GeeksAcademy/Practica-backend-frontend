import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Register() {

const [email, setEmail]=useState(" ")
const [password, setpassword]=useState(" ")
const navigate = useNavigate()




  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#d4edda" }}
    >
      <form className="p-4 rounded shadow bg-white">
        <h2 className='mb-4'>Página de registro</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
          <div className="mb-3 form-check">
            <button type="submit" className="btn btn-success w-100">Regístrate</button>
            <p>Si ya tienes cuenta</p><Link to="/login">Inicia sesión</Link>
          </div>
      </form>
    </div>
  )
}

export default Register
