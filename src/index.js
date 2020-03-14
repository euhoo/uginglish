import React from "react";
import {Provider} from "react-redux";
import Routes from './router';
import Header from './components/header';
import Footer from './components/footer'
import store from './store';
import {fillUserInfo, ifUserInfo} from "./utils/storeFuncs";
import './css/grid.sass';

ifUserInfo();
fillUserInfo();

export default (props) => (
	<Provider store={store}>
		<div className="app-container grid">
			<Header className="header-container"/>
			<div className="main-section-container">
				<Routes history={props.history}/>
			</div>
			<Footer className="footer-container"/>
		</div>
	</Provider>
);

