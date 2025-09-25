import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";


export const Navbar = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		setIsLoggedIn(!!token);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
		navigate("/login");
	};

	if (isLoggedIn) {
		return (
			<nav className="navbar navbar-light">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">React Boilerplate</span>
					</Link>
					<div className="ml-auto">
						<button className="btn btn-danger" onClick={handleLogout}>
							Cerrar Sesión
						</button>
					</div>
				</div>
			</nav>
		);
	}





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