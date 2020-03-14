import * as express from "express";

const router = express.Router();
/* примеры*/
// POST request to delete BookInstance.
// router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
// router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);
/* конец примеров*/

router.get('/info', (request, response) => {
	response.send('Simple server working!')
});

export default router
