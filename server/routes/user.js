import express from "express";
import {findUser, normaliseResponse} from "../utils/utils";
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
	const userData = findUser(data);
	if(!userData) return response.send({error: true});
	const normalizedData = normaliseResponse(userData);
	response.send({...normalizedData});
});

export default router
