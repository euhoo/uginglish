import {Route, HashRouter as Router, Link} from "react-router-dom";
import React from "react";
import Home from './components/home';
import Words from './components/words';
import Login from './components/login'

export default (props) => {
	const { history } = props;
	console.log(history);
	return (
		<Router>
			{/*<Link to="/">Home</Link>*/}
			<Route path="/" component={Home}/>
			<Route path='/login' component={Login}/>
			{/*<Route path='/registration' component={Registration}/>*/}
			<Route path='/application' component={Words}/>
			<Route path='/404' component={Error}/>
		</Router>
	)
}
