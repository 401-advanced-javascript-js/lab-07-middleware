'use strict';

module.exports = (err,req,res,next) => {
  console.log('Error Handler', err.message);
  res.status(err.status);
  res.send(err.message);
};