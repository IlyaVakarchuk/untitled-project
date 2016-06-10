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
          res.json({ 'auth' : true, msg : 'Wellcome again!' });
        } else {
          res.json({ 'auth' : false, msg : 'Incorrect username or password' });
        }
      } else {
        res.json({ 'auth' : false, msg : 'Incorrect username or password' });
      }
    }
  })
});

router.post('/registartion', function(req, res, next) {
  UserModel.find({'username' : req.body.username}, function(err, user) {
    if (err) {
      res.json({ 'auth' : false, msg : err });
    } else {
      if (user.length) {
        res.json({ 'auth' : false, msg : 'User with same name is already registration' });
      } else {
        var newUser = new UserModel({username : req.body.username, password : req.body.password });
        newUser.save(function(err) {
          if (err) {
            res.json({ 'auth' : false, msg : err });
          } else {
            res.json({ 'auth' : true, msg : 'Successful registration' });
          }
        });
      }
    }
  })
});

router.delete('/logout', function(req, res, next) {
  req.session.destroy();
  res.json({ 'auth' : false, msg : 'Goodbye!' });
});

module.exports = router;