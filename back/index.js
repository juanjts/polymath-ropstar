// required
const express = require('express');
const { json } = require('express');
const cors = require('cors');
const morgan = require('morgan')

// local files import
const config = require('./config');
const userRoutes = require('../back/src/routes/restRoutes')

// create an express app
const app = express();

// middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(json());
app.use('/api', userRoutes.routes)

// Configure listening port for Express app
app.listen(config.port, () => console.log('app listen on port: ' + config.port))

module.exports = app;
