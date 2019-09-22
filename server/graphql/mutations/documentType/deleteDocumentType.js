const { GraphQLString } = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/doumentType');
const documentType = require('../../types/documentType');


const deleteDocumentType = {
  type: documentType,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args) => {
    const deleted = await DocumentTypeModel.findOneAndDelete({ id: args.id });
    if (!deleted) {
      throw new Error('Error');
    }
    return deleted;
  },

};

module.exports = deleteDocumentType;
