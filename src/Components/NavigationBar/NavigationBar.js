import React, { useEffect, useState, useLayoutEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavigationBar.scss";
const Nav = () => {
	const history = useHistory();
	const path = history.location.pathname;
	const [className, setClass] = useState("nav");
	const [pathAfterHome] = useState(path);
	const [navA, setNavA] = useState("");
	const [barStyle, setBarStyle] = useState('')

	useLayoutEffect(()=>{
		window.addEventListener('scroll', ()=> {
			window.scrollY >= 65 ? setBarStyle('Scrolling') : setBarStyle('nav')
		})
		
		
	})
	
	useEffect(() => {
		history.listen((location) => {
			location.pathname !== "/" &&
			location.pathname !== " " &&
			location.pathname !== ""
				? setNavA("afterHome")
				: setNavA("");
		});
		path !== "/" && path !== " " && path !== ""
			? setNavA("afterHome")
			: setNavA("");
	}, [pathAfterHome, path, history]);

	setTimeout(() => {
		setClass("classNameAfter");
	}, 1300);
	return (
		<div className={`${className} ${navA}`}>
			<nav className= {`${barStyle}`}>
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
