var express = require('express');
var router = express.Router();

router.get('/auth-info', function(req, res, next) {
  if (req.session.user) {
    res.json({auth : true, user : req.session.user});
  } else {
    res.json({auth : false});
  }
});

module.exports = router;