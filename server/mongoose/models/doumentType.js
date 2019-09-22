const Mongoose = require('mongoose');

module.exports = Mongoose.model('documentType', {
  id: String,
  name: String,
  publicUrl: String,
  inheritFrom: String,
  privileges: String,
  dataTypes: String,
});
