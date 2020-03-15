import reqApi from "../factories/requests";
import localStorageApi from "./localStorageFactory";

export const isAuthentificated = () =>  localStorageApi.isUserId();

export const getUserId = () => localStorageApi.getUserId();
export const setUserId = (userInfo) => localStorageApi.setUserId(userInfo);

export const loginUser = async (reqData) => {
	const response = await reqApi.postLogin(reqData);
	if (response && response.data) {
		if (response.data.error) {
			return {error: true}
		} else return response.data;
	}
	return {error: true};
};
export const authUserById = async (id) => {
	const response = await reqApi.postAuthById({id});
	if (response && response.data) {
		if (response.data.error) {
			return {error: true}
		} else return response.data;
	}
	return {error: true};
};

export default {
	isAuthentificated,
	getUserId,
	loginUser,
	authUserById,
	setUserId
}

