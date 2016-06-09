var express = require('express');
var router = express.Router();
var CommentsModel = require('./../lib/comment-scheme')

router.get('/comments/:id', function(req, res, next) {
  console.lo
  if (req.params.id) {
    CommentsModel.find({'id' : req.params.id}, function(err, comments) {
      if (err) {
        res.json({ msg : err });
      } else {
        if (comments.length) {
          res.json({ comments : comments[0] });
        } else {
          res.json({ msg : 'No comments yet' });      
        }
      }
    })
  } else {
    res.json({ msg : 'Setup ID of post' });
  }
});

module.exports = router;