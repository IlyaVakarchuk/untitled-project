var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
  id : Number,
  categories : Number,
  title : String,
  previewImg : String,
  img : String,
  content : String
}, 'posts');