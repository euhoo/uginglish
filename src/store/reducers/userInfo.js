import types from '../../constants/actionTypes';

const {ADD_USER_INFO} = types;

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_USER_INFO: {
			const {data} = action.payload;
			const newState =  data;
			return newState;
		}
		default: {
			return state;
		}
	}
}
