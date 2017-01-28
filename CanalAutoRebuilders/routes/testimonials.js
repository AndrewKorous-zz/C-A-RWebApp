var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://'

router.get('/', function(req, res, next) {
  res.render('pages/testimonials', {title: 'Canal Auto Rebuilders'});
});

router.post('/', function(req, res, next){

})

module.exports = router;
