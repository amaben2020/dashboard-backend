const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

// You must apply the auth middleware before the router
app.use(auth);
app.use(router);
app.listen(7000);
