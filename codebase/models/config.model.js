// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var configSchema = new Schema({
  name: String,
  value: Number,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Config = mongoose.model('config', configSchema);

// make this available to our users in our Node applications
module.exports = Config;
