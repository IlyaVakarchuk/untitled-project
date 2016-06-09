var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', {
  id : Number,
  author : String,
  text : String,
  date : String
}, 'comments');