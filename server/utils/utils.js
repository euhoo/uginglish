import loginBase from '../../simple_data/loginBase'

export const findUser = (data) => {
	const {login, password} = data;
	return Object.values(loginBase).find(item => item.login === login && item.password === password);
};

export const normaliseResponse = (data) => ({
	"name": data.name,
	"surname": data.surname,
	"userId": data.id,
});
