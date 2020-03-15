import React from "react";
import {Redirect} from "react-router-dom";
import {isAuthentificated} from "../../factories/userFactory";

export default () => (
	isAuthentificated() ? <Redirect to='/application'/> : <Redirect to='/login'/>
)

