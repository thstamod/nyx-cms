const mongoose = require('mongoose');

module.exports = mongoose.model('user', new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  authorization: {
    type: Number,
    required: true
  },
  name: String,
  dateCreated: {
    type: Date,
    required: true
  },

}));
