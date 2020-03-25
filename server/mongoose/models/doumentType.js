const mongoose = require('mongoose');

module.exports = mongoose.model(
  'documentType',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      publicUrl: String,
      inheritFrom: String,
      privileges: String,
      compilation: Object,
      descendants: Object,
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
    },
    { timestamps: true }
  )
);
