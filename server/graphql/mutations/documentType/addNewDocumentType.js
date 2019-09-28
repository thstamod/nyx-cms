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
    dataTypes: {
      type: new GraphQLList(inputDatatype),
    },
  },
  resolve: async (parent, args) => {
    const uModel = new DocumentTypeModel(args);
    const newDocType = await uModel.save();
    if (!newDocType) {
      throw new Error('error');
    }
    return newDocType;
  },
};

module.exports = addNewDocumentType;
