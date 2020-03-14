import types from '../../constants/actionTypes';
const {ADD_USER_INFO} = types;


export const addUserInfo = (data) => ({
	type: ADD_USER_INFO,
	payload: {
		data
	},
});
