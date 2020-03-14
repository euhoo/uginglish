import axios from 'axios'
import urls from './urls';

const basic = (makeObjFunc, data) => {
	const reqObj = makeObjFunc(data);
	return axios(reqObj);
};

const getTodayWords = () => basic(urls.makeTodayWordsReqObj);
const getDefault = () => basic(urls.makeDefault);
const getInfo = () => basic(urls.makeInfoReqObj);
const postLogin = (data) => basic(urls.makeLoginReqObj, data);

export default {
	getTodayWords,
	getDefault,
	getInfo,
	postLogin,
}
