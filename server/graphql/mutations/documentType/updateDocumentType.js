const {
  GraphQLNonNull, GraphQLString, GraphQLList,
} = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/doumentType');
const documentType = require('../../types/documentType');
const inputDatatype = require('../../inputs/inputDataType');

const updateDocumentType = {
  type: documentType,
  args: {
    id: {
      type: GraphQLString,
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
    dataTypes: {
      type: new GraphQLList(inputDatatype),
    },
  },
  resolve: async (parent, args) => {
    const updated = await DocumentTypeModel.findOneAndUpdate({ _id: args.id }, args, { new: true });
    if (!updated) {
      throw new Error('Error');
    }
    return updated;
  },
};

module.exports = updateDocumentType;
