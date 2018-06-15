require('babel-register');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var contains = require('./routes/contains');
var parse = require('./routes/parse');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(cors({origin: 'http://localhost:1337'}));

app.use('/contains', contains);
app.use('/parse', parse);


module.exports = app;
