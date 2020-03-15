import express from "express";
import {findUserById, findUserByLoginAndPassword, normaliseResponse} from "../utils/utils";
const bodyParser = require("body-parser");

const router = express.Router();

var jsonParser = bodyParser.json();
/* примеры*/
// POST request to delete BookInstance.
// router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
// router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);
/* конец примеров*/

router.get('/info', (request, response) => {
	response.send('Simple server working!')
});
router.post('/login', jsonParser, (request, response) => {
	const data = request.body;
	if(!data) return response.sendStatus(400);
	const userData = findUserByLoginAndPassword(data);
	if(!userData) return response.send({error: true});
	const normalizedData = normaliseResponse(userData);
	response.send({...normalizedData});
});
router.post('/auth', jsonParser, (req, res) => {
	const data = req.body;
	if(!data) return res.sendStatus(400);
	const userData = findUserById(data);
	if(!userData) return res.send({error: true});
	const normalizedData = normaliseResponse(userData);
	res.send({data:{...normalizedData}});
});

export default router
