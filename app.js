var express = require('express');
var bodyParser = require('body-parser');

var http = require('http');

//var RedisStore = require('connect-redis')(express);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pet-project-db');

var cookieParser = require('cookie-parser');

var app = express();

var session = require('./lib/session')

app.use(cookieParser());

app.use(bodyParser.json ());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './app/templates');
app.set('view engine', 'jade');

app.use(session('redis://localhost:6379', 'mysecret'))

app.use('/vendor', express.static(__dirname + '/node_modules'));
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/img', express.static(__dirname + '/app/img'));
app.use('/templates', express.static(__dirname + '/app/templates'));
//app.use('/api', require('./api/auth'));

app.use('/api', require('./api/user'));
app.use('/api', require('./api/auth'));
app.use('/api', require('./api/posts'));
app.use('/api', require('./api/comments'));
app.use('/api', require('./api/categories'));


app.all('/*', function(req, res) {
  res.sendFile('index.html', {root : __dirname + '/app/templates'});
});
/*
app.get('/get', function(req, res) {
  console.log(req.session);
  res.send(req.session)
});

app.get('/set/:user', function(req, res) {
  req.session.user = req.params.user;
  res.send(req.session)
}); */

http.createServer(app).listen(3030);