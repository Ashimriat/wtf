import http from "node:http";
import { URL } from "node:url";
import { StringDecoder } from "node:string_decoder";
import config from "./config.js";


const { port, envName } = config;
const router = {
	sample: async (data) => ({
		code: 406,
		pld: { name: 'Sample handler '}
	}),
	notFound: async (data) => ({ code: 404 })
};

const server = http.createServer((req, res ) => {
	const { url, method, headers } = req;
	const { pathname, search, searchParams, hash } = new URL(url, 'http://localhost:3000/');
	const reqPath = pathname.replace(/^\/+|\/+$/g, '');
	console.log(`Request received on path: [${reqPath}] with method: [${method}]`);
	if (search.length) {
		console.log('Search params:');
		for (let [name, value] of searchParams) {
			console.log(`${name}: [${value}]`);
		}
	}
	if (hash.length) {
		console.log(`Hash: [${hash}]`);
	}
	console.log('Headers: ', headers);
	const decoder = new StringDecoder('utf-8');
	let payloadBuffer = '';
	req.on('data', (data) => {
		console.log('Received payload chunk');
		payloadBuffer += decoder.write(data);
	});
	req.on('end', async () => {
		payloadBuffer += decoder.end();
		console.log(`Request payload: [${payloadBuffer}]`);
		const routeHandler = router[reqPath] ?? router.notFound;
		const data = {
			method,
			headers,
			search,
			payload: payloadBuffer,
			path: reqPath,
		};

		const { code, pld } = await routeHandler(data);
		const statusCode = code ?? 200;
		const payload = JSON.stringify(typeof(pld ?? {}));
		res.setHeader('Content-Type', 'application/json');
		res.writeHead(statusCode);
		res.end(payload);
		console.log(`Returning status code [${statusCode}] with response: [${payload}]`);
	});
});

server.listen(port, () => {
	console.log(`Listen on port ${port} in ${envName} mode`);
})

