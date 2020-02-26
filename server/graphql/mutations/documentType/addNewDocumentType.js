const {
  GraphQLNonNull, GraphQLString, GraphQLList,
} = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/doumentType');
const documentType = require('../../types/documentType');

const inputDatatype = require('../../inputs/inputDataType');

const addNewDocumentType = {
  type: documentType,
  args: {
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
  resolve: async (parent, args) => {
    args.creator = "5e5413f7802939338e8f4d95"
    const uModel = new DocumentTypeModel(args);
    const newDocType = await uModel.save();
    if (!newDocType) {
      throw new Error('error');
    }
    return newDocType;
  },
};

module.exports = addNewDocumentType;
