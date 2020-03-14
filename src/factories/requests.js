import axios from 'axios'
import urlsApi from './urls';

const basicRequestFunc = (makeObjFunc) => {
	const reqObj = makeObjFunc();
	return axios(reqObj);
};

const getTodayWords = () => basicRequestFunc(urlsApi.makeTodayWordsReqObj);
const getDefault = () => basicRequestFunc(urlsApi.makeDefault);
const getInfo = () => basicRequestFunc(urlsApi.makeInfoReqObj);

export default {
	getTodayWords,
	getDefault,
	getInfo,
}
