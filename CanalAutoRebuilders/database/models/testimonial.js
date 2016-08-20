var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testimonialSchema = mongoose.Schema({
  firstName: {
    type: String,
    match: /[a-zA-Z]*/
  },
  lastName: {
    type: String,
    match: /[a-zA-Z]*/
  },
  car: {
    type: String
  },
  message: {
    type: String
  }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
