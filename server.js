'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./lib/routes.js');
const logger = require('./lib/middleware/logger.js');
const notFound = require('./lib/middleware/notFound.js');
const errorHandler = require('./lib/middleware/errorHandler.js');
const addReqTime = require('./lib/middleware/addReqTime.js');
const squareNum = require('./lib/middleware/squareNum.js');

app.use(addReqTime);
app.use(logger);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/b/:number', squareNum, (req,res) => {
  res.status(200).send(req.number);
});

app.use('/', routes);

app.use('*', notFound);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

