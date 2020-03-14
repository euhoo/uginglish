import React, {Component} from "react";
import actions from "../../store/actions";
import {connect} from "react-redux";
import {ifUserInfo} from "../../utils/storeFuncs";
import {Redirect} from "react-router-dom";

const {addUserInfo} = actions;
const currentActions = {addUserInfo};
const mapStateToProps = ({userInfo}) => ({userInfo});

class Home extends Component {
	state = {

	};

	componentDidMount = () => {
		const {userInfo} = this.props;
		const isUserInfo = ifUserInfo(userInfo);
		this.setState({isUserInfo});
	};

	render() {
		const {isUserInfo} = this.state;
		return isUserInfo ? <Redirect to='/application'/> : <Redirect to='/login'/>
	}
}

export default connect(mapStateToProps, currentActions)(Home)
