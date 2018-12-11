const express = require('express');
const compress = require('compression');
const path = require('path');
const rootDirectory = path.resolve(__dirname, '../dist/');
const app = express();
const config = require('./services/config');
const enableCORS = require('./managers/cors');
const enableRouters = require('./managers/routes');
const bodyParser = require('body-parser');
require("./db/dbConnection");

// Enabling managers to act on the express server
enableCORS(app);

app.use(bodyParser.json());
app.use(compress());
app.use(express.static(rootDirectory));

app.enable('trust proxy');
app.disable('x-powered-by');

//Enable Routes
enableRouters(app);

app.use(function(req, res) {
    res.sendFile(rootDirectory + '/index.html');
});

app.listen(config.port, function() {
    console.log('Server running on ' + config.port + '...');
});
