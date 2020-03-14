import App from './components/app.jsx';
import React from "react";
import {Provider} from "react-redux";
import makeStoreFunc from './store';
//здесь подключить хранилище, приложение, router

const normalizedStore = {};
const store = makeStoreFunc(normalizedStore);
export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
);

