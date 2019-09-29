const Mongoose = require('mongoose');

module.exports = Mongoose.model('dataType', {
  id: String,
  name: String,
  type: String,
  options: String,
  value: String,
});
