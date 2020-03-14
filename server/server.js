import express from 'express'
import user from "./routes/user";
import words from "./routes/words";
import indexRouter from "./routes/indexRouter";
import logging from "./logging";
import errors from './errors';
const app = express();

export default (port, api, serverStartFunc) => {
// setup directory for files
	app.use(express.static('dist'));

//setup routes
	app.use(`/${api}/user`, user);
	app.use(`/${api}/words`, words);
	app.use(`/${api}/`, indexRouter);
	app.use(`/`, indexRouter);

//setup logging
	app.use(logging);

//setup errors - подключать последним use
	app.use(errors);

	//listening port
	app.listen(port);
	serverStartFunc && serverStartFunc();
}
