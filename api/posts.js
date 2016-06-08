var express = require('express');
var router = express.Router();
var PostModel = require('./../lib/post-scheme')

router.get('/posts', function(req, res, next) {
    PostModel.find({}, function(err, posts) {
      if (err) {
        res.json({ msg : err });
      } else {
        if (posts.length) {
          res.json({ posts : posts });
        } else {
          res.json({ msg : 'Empty' });  
        }
      }
    })
});

router.get('/posts/:id', function(req, res, next) {
  if (req.params.id) {
    PostModel.find({'id' : req.params.id}, function(err, post) {
      if (err) {
        res.json({ msg : err });
      } else {
        if (post.length) {
          res.json({ post : post[0] });
        } else {
          res.json({ msg : 'Incorrect ID of post' });      
        }
      }
    })
  } else {
    res.json({ msg : 'Setup ID of post' });
  }
});

module.exports = router;