import React from "react";
import { Link, NavLink } from "react-router-dom";
//Styles
import "./Header.css";
type Navigation = {
	name: string;
	path: string;
};

const Header = () => {
	const nav: Navigation[] = [
		{ name: "Portfolio", path: "/Portfolio" },
		{ name: "About", path: "/About" },
		{ name: "Contact Me", path: "/Contact-Information" },
	];

	return (
		<div className='header'>
			<div className='home-page'>
				<NavLink to='/'>Justin Cabrera</NavLink>
			</div>
			<div className='navigation'>
				<ul>
					{nav.map((element) => {
						return (
							<NavLink
								key={element.name}
								to={element.path}
								activeStyle={{ opacity: "0.5" }}
								style={{ color: "white" }}>
								<li>
									<b>{element.name}</b>
								</li>
							</NavLink>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Header;
