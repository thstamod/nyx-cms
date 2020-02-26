const mongoose = require('mongoose');

module.exports = mongoose.model('dataType', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  options: String,
  value: String,
  dateCreated: {
    type: Date,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
}));
