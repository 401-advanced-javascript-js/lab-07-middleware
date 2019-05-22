'use strict';

const errorHandler = require('./errorHandler.js');

module.exports = (err, req, res, next) => {
  if (!req.params.number && req.params.number !== 0) {
    errorHandler({
      status: 422,
      message: 'Invalid Input',
    });
  } else {
    req.number = req.params.number ** 2;
  }
};