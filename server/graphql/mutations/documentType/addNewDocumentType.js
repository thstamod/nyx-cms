const { GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');
const DocumentTypeModel = require('../../../mongoose/models/documentType');
const documentType = require('../../types/documentType');
const inputDatatype = require('../../inputs/inputDataType');
const inputDoctype = require('../../inputs/inputDocType');

const addNewDocumentType = {
  type: documentType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    parentDocumentType: {
      type: GraphQLString,
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
    descendants: {
      type: new GraphQLList(GraphQLString),
    },
  },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const model = args;
    model.creator = req.userId;
    const uModel = new DocumentTypeModel(model);
    const newDocType = await uModel.save();
    if (!newDocType) {
      throw new Error('error');
    }
    return newDocType;
  },
};

module.exports = addNewDocumentType;
