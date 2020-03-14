import server from './server';
const appConfig = require("../config");

const {devOptions, api} = appConfig;
const {port} = devOptions;

const serverStartFunc = () => {
	console.log(`Server started at port: `, port);
};

server(port, api, serverStartFunc);
