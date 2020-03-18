const { GraphQLList } = require('graphql');

const DocumentTypeModel = require('../../mongoose/models/doumentType');
const documentType = require('../types/documentType');

const GetDocunemtTypes = {
  type: new GraphQLList(documentType),
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const docTypes = await DocumentTypeModel.find();
    if (!docTypes) {
      throw new Error('error while fetching data');
    }
    return docTypes;
  },
};

module.exports = GetDocunemtTypes;
