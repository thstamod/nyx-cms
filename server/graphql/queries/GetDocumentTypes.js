const _ = require('lodash');
const { GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql');

const DocumentTypeModel = require('../../mongoose/models/documentType');
const documentType = require('../types/documentType');

const GetDocumentTypes = {
  type: new GraphQLList(documentType),
  args: { root: { type: GraphQLBoolean } },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    let docTypes = null;
    if (args.hasOwnProperty('root')) {
      docTypes = await DocumentTypeModel.find({
        parentDocumentType: null,
      });
    }
    if (_.isEmpty(args)) {
      docTypes = await DocumentTypeModel.find();
    }

    if (!docTypes) {
      throw new Error('error while fetching data');
    }
    return docTypes;
  },
};

module.exports = GetDocumentTypes;
