import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import Work from "./Components/NavigationLinks/Work";
import Contact from "./Components/NavigationLinks/Contact";
import About from './Components/NavigationLinks/About'
import Nav from "./Components/NavigationBar/NavigationBar";
function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Home} />
			<Route path="/Work" component={Work} />
			<Route path="/Contact" component={Contact} />
			<Route path="/About" component={About} />
			<Nav />
		</div>
	);
}

export default App;
