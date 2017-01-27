

module.exports = function() {
  var User = require('../models/user.js');
  this.seedAdmin = function() {
    User.findOne({'email':'ajkorous@gmail.com'}, function(error, user){
    if(error){
      console.log(error);
    };
    if(user){
      console.log('Mongoose: Andrew Korous was already seeded');
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
          console.log(error);
        console.log('Mongoose: Andrew Korous seeded');
      });
    }
  });
};
};
