import store from "../store";
import actions from "../store/actions";

export const updateUserInfoStore = (data) => {
	const {addUserInfo} = actions;
	store.dispatch(addUserInfo(data))
};
