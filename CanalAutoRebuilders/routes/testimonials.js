var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/testimonials', {title: 'Canal Auto Rebuilders'});
});

module.exports = router;
