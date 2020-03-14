import React, {Component} from "react"
import Header from './header'
import LeftSection from './leftSection'
import RightSection from './rightSection'
import Footer from './footer'
import './app.sass'

export default class App extends Component {
	render() {
		return (
			<div className="app-container grid">
				<Header className="header-container"/>
				<LeftSection className="section-left-container"/>
				<RightSection className="section-right-container"/>
				<Footer className="footer-container"/>
			</div>
		)
	}
}
