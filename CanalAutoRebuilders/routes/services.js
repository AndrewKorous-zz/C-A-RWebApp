var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/services/services', { title: 'Canal Auto Rebuilders' });
});

module.exports = router;
