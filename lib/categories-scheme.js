var mongoose = require('mongoose');

module.exports = mongoose.model('Categories', {
  id : Number,
  title : String
}, 'categories');