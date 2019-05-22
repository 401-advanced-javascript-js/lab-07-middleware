'use strict';

const errorHandler = require('./errorHandler.js');

module.exports = (req, res, next) => {
  console.log('Square');
  if (!req.params.number && req.params.number !== 0) {
    errorHandler({
      status: 404,
      message: 'Invalid Input',
    }, req, res);
  } else {
    req.number = req.params.number ** 2;
  }
  next();
};