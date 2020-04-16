const { GraphQLString } = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/documentType');
const documentType = require('../../types/documentType');

const deleteDocumentType = {
  type: documentType,
  args: {
    _id: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const deleted = await DocumentTypeModel.findByIdAndDelete({
      _id: args._id,
    });
    if (!deleted) {
      throw new Error('Error');
    }
    return deleted;
  },
};

module.exports = deleteDocumentType;
