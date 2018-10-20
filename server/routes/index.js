const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});


/*
router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the first page.',
}));

router.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));
*/
module.exports = router;