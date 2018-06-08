const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();

app.use(express.static(__dirname + '/client/static'));


app.use(bodyParser.json());
app.use(session({
	secret: 'loginregisterandstuff',
	resave: false,
	saveUninitialized: true
}))

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`) );