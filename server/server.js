var express = require('express');
var middleware = require('./config/middleware');
var auth = require('./config/passport');
var passport = require('passport');
var db = require('./config/db');

var port = process.env.PORT || 3000;

var app = express();

auth(passport);

middleware(app);

app.listen(port);
console.log('Server now listening on port ' + port);

module.exports = app;