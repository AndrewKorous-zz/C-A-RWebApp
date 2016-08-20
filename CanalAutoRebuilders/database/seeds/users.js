var User = require('../models/user.js');

User.findOne({'email':'ajkorous@gmail.com'}, function(error, user){
  if(error) return;
  if(user){
    //already in database
  } else {
    var newUser = new User();
    newUser = {
      email:'ajkorous@gmail.com',
      password:'zpqm01',
      firstName:'Andrew',
      lastName:'Korous'
    };
    newUser.save(function(error) {
      if(error)
        throw error;
      consol.log('Mongoose: Andrew Korous seeded');
    });
  }
});
