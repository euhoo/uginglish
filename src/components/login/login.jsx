import React, {useState} from "react";
import './login.sass';
import reqApi from '../../factories/requests';

export default (props) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginError, setError] = useState(false);

	const sent = async () => {
		const reqData = {login, password};
		const response = await reqApi.postLogin(reqData);
		if (response && response.data) {
			if (response.data.error) {
				setError(true);
				setTimeout(() => {
					setError(false);
				}, 3000);
				return;
			} else {
				console.log(response.data);
				localStorage.userInfo = response.data;
				// прописать здесь action по обновлению userInfo
			}
		}


	};

	const loginChangeHandle = ({target}) => {
		const {value} = target;
		setLogin(value);
	};

	const passwordChangeHandle = ({target}) => {
		const {value} = target;
		setPassword(value);
	};


	return (
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

			{isLoginError && <div className="login-container__input login-container__input_error">
				Неправильный логин или пароль
			</div>}
		</div>
	)
}
