var express = require('express');
var router = express.Router();
var CommentsModel = require('./../lib/categories-scheme')

router.get('/categories/', function(req, res, next) {
  CommentsModel.find({}, function(err, list) {
    if (err) {
      res.json({ msg : err });
    } else {
      if (list.length) {
        res.json({ categoriesList : list });
      } else {
        res.json({ msg : 'No list yet' });      
      }
    }
  })
});

module.exports = router;