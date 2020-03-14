import express from "express";
import todayWords from "../../simple_data/todayWords";

const router = express.Router();

router.get('/todayWords', (request, response) => {
	response.send(todayWords)
});

export default router
