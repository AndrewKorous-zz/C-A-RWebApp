var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/contact-us', { title: 'Canal Auto Rebuilders' });
});

router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'CanalWebsite@gmail.com',
      pass: 'tyandrew'
    }
  });

  var mailOptions = {
    from: 'CanalAutoWebsite Admin <johndoe@CanalAuto.com>',
    to: 'ajkorous@gmail.com',
    subject: 'New Message from Website',
    text: 'You have a new website message with the following details... \nName: ' +req.body.name+ ' Email: ' +req.body.email+ ' Message: ' +req.body.message,
    html: '<h4>You have a new website message with the following details...</h4><p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul></p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('message sent guy: ' +info);
      res.redirect('/');
    }
  });
})

module.exports = router;
