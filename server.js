var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var ejs = require('ejs');
var bycryptjs = require('bcryptjs');

app.use(express.static(__dirname+'/public/dist/public'));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/briannablog');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
    console.log('on port 8000');
})