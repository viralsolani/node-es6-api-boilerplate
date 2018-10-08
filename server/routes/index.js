//var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the first page.',
}));

router.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));



module.exports = router;
