import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();


	const token = localStorage.getItem("token");


	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>


				{/* hacemos un ternario para mostrar el boton de cerrar sesion o el de iniciar sesion dependiendo de si estamos logueados o no */}
				{
					store.user_profile && token ? <div className="ml-auto">
						<button className="btn btn-danger" onClick={handleLogout}>
							Cerrar Sesión
						</button>
					</div> :
						<div className="ml-auto">
							<button className="btn btn-primary" onClick={() => navigate("/login")}>
								Iniciar sesión
							</button>
						</div>
				}

			</div>
		</nav>
	);






	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login" className="me-2">
						<button className="btn btn-primary">Iniciar Sesión</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};