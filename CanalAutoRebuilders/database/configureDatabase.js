var mongoUtil = require('./mongoUtil');
var db = mongoUtil.getDb();
var users = require('./seeds/users');

var adminSeed = {
  email:'ajkorous@gmail.com',
  password:'zpqm01',
  firstName:'Andrew',
  lastName:'Korous'
}

db.collection('users').findOne({'email':adminSeed.email}, function(error, user){
  if(error){
    console.log(error);
  };
  if(user){
    console.log(adminSeed.firstName+' '+adminSeed.lastName+' was already seeded');
  } else {
    db.collection('users').insert([admin], function(error, result){
      if(error){
        console.log(error);
      } else {
        console.log(adminSeed.firstName+' '+adminSeed.lastName+' was inserted into the db');
      }
      db.close();
    });
  }
  db.close();
});
