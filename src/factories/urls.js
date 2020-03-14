const userId = sessionStorage.userId;
const options = {withCredentials: true};

const makeGetRequestObj = (url) => ({
	method: 'get',
	options,
	url
});

const makeTodayWordsReqObj = () => makeGetRequestObj(`api/words/todayWords?userId=${userId}`);

export default {
	makeTodayWordsReqObj
}
