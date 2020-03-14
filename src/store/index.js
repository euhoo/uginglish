import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';

export default (normalizedStore) =>
	createStore(
	reducers,
	normalizedStore,
	applyMiddleware(thunk),
);

