import express from "express";
import todayWords from "../../simple_data/todayWords";

const router = express.Router();

router.get('/todayWords', (request, response) => {
	response.send(todayWords)
});
router.get('/todayWords/:id', (request, response) => {
	// const isAuthorized = checkAuth(id);
	// if (!isAuthorized) {
	// 	response.status(403);
	// 	response.send({data: 'noData'});
	// 	return;
	// }
	// const todayWords = findTodayWords(id);
	response.send(todayWords)
});

export default router
