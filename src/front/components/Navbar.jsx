import { Link } from "react-router-dom";
import React from "react";


export const Navbar = () => {

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