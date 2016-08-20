var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
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

module.exports = mongoose.model('User', userSchema);
