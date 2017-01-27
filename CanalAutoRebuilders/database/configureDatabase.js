var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/canalauto';
var users = require('./seeds/users');

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
    var userCollection = db.collection('users');
    var admin = {
      email:'ajkorous@gmail.com',
      password:'zpqm01',
      firstName:'Andrew',
      lastName:'Korous'
    };
    userCollection.findOne({'email':admin.email}, function(error, user){
      if(error){
        console.log(error);
      };
      if(user){
        console.log(admin.firstName + ' ' + admin.lastName + ' was already seeded');
      } else {
        userCollection.insert([admin], function (err, result) {
          if(err){
            console.log(err);
          } else {
            console.log(admin.firstName + admin.lastName + 'inserted into db');
          }
          db.close();
        });
      }
    })



  }
});
