import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#d4edda" }}
    >
      <form className="p-4 rounded shadow bg-white">
        <h2 className='mb-4'>Iniciar sesión</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <div className="mb-3 form-check">
        </div>
        <div>
          
        </div>
        <button type="submit" className="btn btn-success w-100">Enviar</button>

        <p>Si no tienes cuenta</p><Link to="/register">Registrate</Link>
      </form>
    </div>
  )
}

export default Login
