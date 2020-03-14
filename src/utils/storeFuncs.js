import {addUserInfo} from "../store/actions/userInfo";
import store from '../store';

export const fillUserInfo = () => {
	const sessionUserInfo = sessionStorage.userInfo;
	console.log('sessionUserInfo: ', sessionUserInfo);
	if(sessionUserInfo){
		store && store.dispatch(addUserInfo(sessionUserInfo));
		return;
	}
	const localUserInfo = localStorage.userInfo;
	console.log('localUserInfo: ', localUserInfo);
	if(localUserInfo){
		store && store.dispatch(addUserInfo(localUserInfo));
		return;
	}
};

export const ifUserInfo = () => {
	const userInfo = store.getState().userInfo;
	const isUserInfo = userInfo && Object.keys(userInfo).length > 0;
	console.log('isUserInfo: ', !!isUserInfo);
	return isUserInfo
}
