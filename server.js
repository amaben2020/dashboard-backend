const jsonServer = require('json-server');
const jsonServerAuth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const port = process.env.PORT || 5000; // <== You can change the port

server.use(jsonServerAuth);
server.use(router);

server.listen(port);
