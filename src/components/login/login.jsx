import React, {useState} from "react";
import './login.sass';
import {updateUserInfoStore} from "../../factories/actionsFactory";
import {Redirect} from "react-router-dom";
import localStorageApi from "../../factories/localStorageFactory";
import userFactory, {loginUser} from "../../factories/userFactory";

const Login = (props) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isDataCorrect, setDataCorrectState] = useState(true);
	const [isLoginCorrect, setLoginCorrectState] = useState({correct: true, empty: true});
	const [isPasswordCorrect, setPasswordCorrectState] = useState({correct: true, empty: true});
	const [isRedirect, setRedirect] = useState(false);

	const checkData = () => {
		const isLogin = isLoginCorrect.correct && !isLoginCorrect.empty;
		const isPassword = isPasswordCorrect.correct && !isPasswordCorrect.empty;
		return isLogin && isPassword
	};

	const sent = async () => {
		const isAllDataCorrect = checkData();
		if (!isAllDataCorrect) return;
		const reqData = {login, password};
		const userInfo = await loginUser(reqData);
		if (!userInfo || userInfo.error) return setDataCorrectState(false);
		updateUserInfoStore(userInfo);
		userFactory.setUserId(userInfo.userId);
		setRedirect(true);
	};

	const loginChangeHandle = ({target}) => {
		const {value} = target;
		const {correct, empty} = isLoginCorrect;
		setLoginCorrectState({correct: true, empty: false});
		if (!value) {
			setLogin(value);
			return setLoginCorrectState({correct, empty: true});
		}
		setLogin(value);
	};

	const passwordChangeHandle = ({target}) => {
		const {value} = target;
		const {correct, empty} = isPasswordCorrect;
		setPasswordCorrectState({correct: true, empty: false});
		if (!value) {
			setPassword(value);
			return setPasswordCorrectState({correct, empty: true});
		}
		setPassword(value);
	};

	return (
		<>
			{isRedirect && <Redirect to='/application'/> }
			<div className="login-container-wrapper">
				<div className="login-container__input login-container__input_login">
					<input type="text" value={login} placeholder="Логин" onChange={loginChangeHandle}/>
				</div>
				<div className="login-container__input login-container__input_password">
					<input type="text" value={password} placeholder="Пароль" onChange={passwordChangeHandle}/>
				</div>
				<div className="login-container__input login-container__input_btn">
					<input type="button" value="ок" onClick={sent}/>
				</div>

				{!isDataCorrect && <div className="login-container__input login-container__input_error">
					Неправильный логин или пароль
				</div>}
			</div>
		</>
	)
};

export default Login
