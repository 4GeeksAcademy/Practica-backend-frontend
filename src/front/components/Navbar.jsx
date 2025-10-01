import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {

	const [color, setColor] = useState("neutro")  //variable de estado
	const navigate = useNavigate()

	const navegame = () => {
		navigate("/login")   // me lleva a login 
		setColor("rojo")     // setColor la funcion que me modifica el valor inicial de la variable de estado, al cambiar el valor inicial me cambia el color
	}

	return (
		<nav className="navbar navbar-light">
			<div className="container">
					
						<Link to="/">
							<span className={`navbar-brand mb-0 h1 ${color == "neutro" ? "text-dark" : "text-danger"}`} >
							React Boilerplate
							</span>
						</Link> 		

				<button className="btn btn-primary" onClick={() => navegame()}>
					Login
				</button>
			</div>
		</nav>
	);
}


//Link to es para texto y Navigate para botones o acciones que quiero hacer si se cumple una condición dada dentro de una función 
//es decir: si los datos estan bien navegame a donde yo quiera