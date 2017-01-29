var express = require('express');
var router = express.Router();

var mongoUtil = require('.././database/mongoUtil');
var db = mongoUtil.getDb();

// var testimonialExample = {
//   firstName:'John',
//   lastName:'Doe',
//   email:'hehexd@gmail.com',
//   car: {
//     year: '1969',
//     make: 'Pontiac',
//     model: 'Firebird'
//   },
//   message: 'Hell yea dude'
// }

router.get('/', function(req, res, next) {
  res.render('pages/testimonials', {title: 'Canal Auto Rebuilders'});
});

router.post('/submit', function(req, res, next){
  db.collection('testimonials').findOne({'email':req.body.email}, function(error, testimonial){
    if(error){
      console.log(error);
    }
    if(testimonial){
      console.log('You have already submitted a testimonial');
      res.redirect('/');
    } else {
      var newTestimonial = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        car: {
          year: req.body.year,
          make: req.body.make,
          model: req.body.model
        },
        message: req.body.message
      };
      db.collection('testimonials').insert([newTestimonial], function(error, result){
        if(error){
          console.log(error);
        } else {
          console.log(newTestimonial.firstName+' '+newTestimonial.lastName+' submitted a testimonial to db');
        }
        db.close();
      });
      res.redirect('/');
    }
    db.close();
  });
});

module.exports = router;
