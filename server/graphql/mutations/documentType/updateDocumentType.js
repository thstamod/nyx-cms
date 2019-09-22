const {
  GraphQLNonNull, GraphQLString,
} = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/doumentType');
const documentType = require('../../types/documentType');


const addNewDocumentType = {
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
      type: GraphQLString,
    },
  },
  resolve: async (parent, args) => {
    const updated = await DocumentTypeModel.findOneAndUpdate({ id: args.id }, args, { new: true });
    if (!updated) {
      throw new Error('Error');
    }
    return updated;
  },
};

module.exports = addNewDocumentType;
