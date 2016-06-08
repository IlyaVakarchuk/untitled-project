var session = require('express-session');
var RedisStore = require('connect-redis')(session);

module.exports = function Sessions(url, secret) {
  var store = new RedisStore({url : url});
  var sess = session({
    secret : secret,
    store : store,
    resave : true,
    saveUninitialized: true
  });

  return sess;
}