import server from './server';
const appConfig = require("../config");

const api = 'api';
const {port} = appConfig.devOptions;

const serverStartFunc = () => {
	console.log(`Server started at port: `, port);
};

server(port, api, serverStartFunc);
