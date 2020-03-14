import axios from 'axios'
import urlsApi from './urls';

const getTodayWords = () => {
	const reqObj = urlsApi.makeTodayWordsReqObj();
	return axios(reqObj);
}

export default {
	getTodayWords,
}
