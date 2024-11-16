var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GastoPinguin' });
});

/* GET home page. */
router.get('/api/', function(req, res, next) {
  res.render('api/index', { title: 'GastoPinguin' });
});

module.exports = router;
