import React from "react";
import {Provider} from "react-redux";
import Routes from './router';
import Header from './components/header';
import Footer from './components/footer'
import store from './store';
import './css/grid.sass';
import {updateUserInfoStore} from "./factories/actionsFactory";
import userApi from "./factories/userFactory";

const userId = userApi.getUserId();
userId && userApi.authUserById(userId).then(response => {
	response.data && updateUserInfoStore(response.data)
});

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

