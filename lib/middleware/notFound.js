'use strict';

const errorHandler = require('./errorHandler.js');

module.exports = (req,res,next) => {
  console.log('Unknown Route');
  errorHandler({
    status: 404,
    message: 'This route does not exist',
  });
  res.end();
};