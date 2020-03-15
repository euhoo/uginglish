//вынести сюда все взаимодействие с localStorage

const getUserId = () => {
	return localStorage.userId;
};
const setUserId = (id) => {
	if(!id) return;
	localStorage.userId = id;
};
const isUserId = () => !!localStorage.userId;

export default {
	getUserId,
	setUserId,
	isUserId
}
