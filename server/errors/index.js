export default (err, request, response, next) => {
	// логирование ошибки, пока просто console.log
	console.log(err);
	response.status(500).send("Something broke")
}
