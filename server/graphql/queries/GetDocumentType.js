const { GraphQLString } = require('graphql');

const DocumentTypeModel = require('../../mongoose/models/doumentType');
const documentType = require('../types/documentType');

const GetDocunemtType = {
  type: documentType,
  args: { _id: { type: GraphQLString } },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized')
    }
    const docTypes = await DocumentTypeModel.findById(args._id);
    if (!docTypes) {
      throw new Error('error while fetching data');
    }
    return docTypes;
  },
};

module.exports = GetDocunemtType;
