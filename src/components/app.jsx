import React, {Component} from "react";
import Header from './header/header.jsx';
import Cards from "./cards/cards.jsx";

export default class App extends Component {
	render() {

		return (
			<>
				<Header/>
				<Cards/>
			</>
		)
	}
}
