const { GraphQLList, GraphQLString } = require('graphql');

const DocumentTypeModel = require('../../mongoose/models/doumentType');
const documentType = require('../types/documentType');

const GetDocunemtTypes = {
  type: new GraphQLList(documentType),
  args: { _id: { type: GraphQLString } },
  resolve: async (parent, args) => {
    const docTypes = await DocumentTypeModel.findById(args._id);
    if (!docTypes) {
      throw new Error('error while fetching data');
    }
    return docTypes;
  },
};

module.exports = GetDocunemtTypes;
