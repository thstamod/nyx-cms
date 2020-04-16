const { GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const DocumentTypeModel = require('../../../mongoose/models/documentType');
const documentType = require('../../types/documentType');
const inputDatatype = require('../../inputs/inputDataType');
const inputDoctype = require('../../inputs/inputDocType');

const updateDocumentType = {
  type: documentType,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
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
    // TODO: refactor how descendants are pushed
    let _descendants = null;
    if (args.descendants) {
      _descendants = args.descendants;
      delete args.descendants;
    }
    const updated = await DocumentTypeModel.findByIdAndUpdate(
      { _id: args._id },
      _descendants
        ? { ...args, $addToSet: { descendants: _descendants } }
        : args,
      { new: true }
    );
    if (!updated) {
      throw new Error('Error');
    }
    return updated;
  },
};

module.exports = updateDocumentType;
