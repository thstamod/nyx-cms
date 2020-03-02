const {
  GraphQLNonNull, GraphQLString, GraphQLList,
} = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/doumentType');
const documentType = require('../../types/documentType');
const inputDatatype = require('../../inputs/inputDataType');

const updateDocumentType = {
  type: documentType,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    publicUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    inheritFrom: {
      type: GraphQLString,
    },
    privileges: {
      type: GraphQLString,
    },
    compilation: {
      type: new GraphQLList(inputDatatype),
    },
  },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized')
    }
    const updated = await DocumentTypeModel
      .findByIdAndUpdate({ _id: args._id }, args, { new: true });
    if (!updated) {
      throw new Error('Error');
    }
    return updated;
  },
};

module.exports = updateDocumentType;
