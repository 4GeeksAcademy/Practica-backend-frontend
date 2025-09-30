import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>


				

			</div>
		</nav>
	);
}

	
