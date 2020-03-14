import express from 'express'

const app = express();
app.get('/info', (request, response) => {
	response.send('Simple server working!')
});

app.use((request, response, next) => {
	console.log(request.headers);
	next()
});

app.use((err, request, response, next) => {
	// логирование ошибки, пока просто console.log
	console.log(err);
	response.status(500).send("Something broke")
});

app.listen(4000);
export default app;
