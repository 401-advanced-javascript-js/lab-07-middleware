'use strict';

module.exports = (err,req,res,next) => {
  console.log(err.message);
  res.status(err.status);
  res.send(err.message);
};