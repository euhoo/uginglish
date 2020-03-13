import React, {Component} from "react"
import Header from './header'
import Cards from "./cards"
import Main from './main'
import LeftSection from './leftSection'
import RightSection from './rightSection'
import Footer from './footer'

export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Header className="header-container"/>
				<Main classNam="main-container">
					<LeftSection className="section-left-container"/>
					<RightSection className="section-main-container">
							<Cards className="cards-container"/>
					</RightSection>
				</Main>
				<Footer className="footer-container"/>
			</div>
		)
	}
}
