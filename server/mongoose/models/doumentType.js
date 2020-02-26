const mongoose = require('mongoose');

module.exports = mongoose.model('documentType', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  publicUrl: String,
  inheritFrom: String,
  privileges: String,
  compilation: Object,
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
