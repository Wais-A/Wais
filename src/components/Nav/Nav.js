import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Nav.scss";

const Nav = (props) => {
	const history = useHistory();
	const path = history.location.pathname;
	const [className, setClass] = useState("nav");
	const [pathAfterHome] = useState(path);
	const [navA, setNavA] = useState("");

	useEffect(() => {
		history.listen((location) => {
			console.log(location);
			location.pathname !== "/" &&
			location.pathname !== " " &&
			location.pathname !== ""
				? setNavA("afterHome")
				: setNavA("");
		});
	}, [pathAfterHome, path, history]);
	setTimeout(() => {
		setClass("classNameAfter");
	}, 1300);

	return (
		<div className={`${className} ${navA}`}>
			<nav>
				<NavLink activeClassName="active" to="/Work">
					WORK
				</NavLink>

				<NavLink activeClassName="active" to="/About">
					ABOUT
				</NavLink>

				<NavLink activeClassName="active" to="/Contact">
					CONTACT
				</NavLink>
			</nav>
		</div>
	);
};

export default Nav;
