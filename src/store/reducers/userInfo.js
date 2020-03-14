import types from '../../constants/actionTypes';

const {ADD_USER_INFO} = types;

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_USER_INFO: {
			const {data} = action.payload;
			const newState =  {userData: data};
			console.log("newState: ",newState);
			return newState;
		}
		default: {
			return state;
		}
	}
}
