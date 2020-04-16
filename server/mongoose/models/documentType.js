const mongoose = require('mongoose');

module.exports = mongoose.model(
  'documentType',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      parentDocumentType: String,
      inheritFrom: String,
      privileges: String,
      compilation: [Object],
      descendants: {
        type: 'array',
        items: { type: 'string', uniqueItems: true },
      },
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
    },
    { timestamps: true }
  )
);
