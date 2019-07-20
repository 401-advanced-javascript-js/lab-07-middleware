'use strict';

const express = require('express');
const router = express.Router();

router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', (req,res, next) => {
  console.log('In /d route.');
  next({
    status: 500,
    message: 'Some Text for Error',
  });
});

module.exports = router;