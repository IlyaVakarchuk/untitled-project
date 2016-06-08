var express = require('express');
var router = express.Router();
var UserModel = require('./../lib/user-scheme')

router.post('/login', function(req, res, next) {
  UserModel.find({'username' : req.body.username}, function(err, user) {
    if (err) {
      res.json({ 'auth' : false, msg : err });
    } else {
      if (user.length) {
        if (user[0].password == req.body.password) {
          req.session.user = user[0].username;
          res.json({ 'auth' : true });
        } else {
          res.json({ 'auth' : false, msg : 'Incorrect username or password' });
        }
      } else {
        res.json({ 'auth' : false, msg : 'Incorrect username or password' });
      }
    }
  })
});

module.exports = router;