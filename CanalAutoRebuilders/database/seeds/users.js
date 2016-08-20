var mongoose = require('mongoose');

var user = mongoose.Schema({
  firstName: {
    type: String,
    match: /[a-zA-Z]*/
  },
  lastName: {
    type: String,
    match: /[a-zA-Z]*/
  },
  email: {
    type: String,
    match: /.+@.+\..+/,
    required: true
  },
  password: {
    type: String
  }
});

user.findOne({'email':'ajkorous@gmail.com'}, function(error, user){
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
