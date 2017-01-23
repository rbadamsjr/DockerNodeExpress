///////////////////////////////////////////////////////////
// File Name: server.js
// Created: 1/11/2017
// Description: Express Rest API for supporting fundera
// Author: roland.adams@smartideasllc.net
// Company: Breakoutfinance
//////////////////////////////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');
var env = require('./env.json');

var configModel = require('./models/config.model');

exports.config = function(){
    var node_env = process.env.NODE_ENV || 'development';
    return env[node_env];
};

var app = express();
var port = process.env.PORT || 8000;
var router = express.Router();
// connect to database
mongoose.connect('mongodb://mongodb/fundera');
var db = mongoose.connection;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api',require('./routes/prequalify.routes'));
app.use('/',require('./routes/default.routes'));

// add test data
var testConfig = new configModel({
  name: 'CreditScore',
  value: 720
});

testConfig.save(function(err) {
  if (err) throw err;

  console.log('Config saved successfully!');
});

// get all the users
configModel.find({}, function(err, config) {
  if (err) throw err;

  // object of all the users
  console.log(config);
});

app.listen(port);
console.log('Running fundera api on http://localhost:'+ port);
