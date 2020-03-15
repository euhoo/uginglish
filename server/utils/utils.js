import loginBase from '../../simple_data/loginBase'

export const findUserByLoginAndPassword = (data) => {
	const {login, password} = data;
	return Object.values(loginBase).find(item => item.login === login && item.password === password);
};
export const findUserById = (data) => {
	const {id} = data;
	return loginBase[id];
};

export const normaliseResponse = (data) => ({
	"name": data.name,
	"surname": data.surname,
	"userId": data.id,
});
