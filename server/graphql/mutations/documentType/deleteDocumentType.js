const { GraphQLString } = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/doumentType');
const documentType = require('../../types/documentType');


const deleteDocumentType = {
  type: documentType,
  args: {
    _id: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args) => {
    const deleted = await DocumentTypeModel.findOneAndDelete({ _id: args._id });
    if (!deleted) {
      throw new Error('Error');
    }
    return deleted;
  },

};

module.exports = deleteDocumentType;
