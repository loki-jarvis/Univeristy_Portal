var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('users', { title: 'Handlebars and MongoDB with Express 4' });
});

module.exports = router;
