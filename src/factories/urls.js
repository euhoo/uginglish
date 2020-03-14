const appConfig = require("../../config");
const {api} = appConfig;
const {userInfo} = sessionStorage;
const userId = userInfo ? userInfo.userId : '';
const options = {withCredentials: true};

const makeGetRequestObj = (url) => ({
	method: 'get',
	options,
	url: `/${api}/${url}`,
});
const makePostRequestObj = (url, data) => ({
	method: 'POST',
	options,
	url: `/${api}/${url}`,
	data,
});
const makeTodayWordsReqObj = () => makeGetRequestObj(`/words/todayWords?userId=${userId}`);
const makeDefault = () => makeGetRequestObj(`/`);
const makeInfoReqObj = () => makeGetRequestObj(`/info`);
const makeLoginReqObj = (data) => makePostRequestObj(`/user/login`, data);

export default {
	makeTodayWordsReqObj,
	makeDefault,
	makeInfoReqObj,
	makeLoginReqObj
}
