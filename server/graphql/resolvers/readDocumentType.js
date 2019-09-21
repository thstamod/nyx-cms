const {
  GraphQLObjectType, GraphQLList,
} = require('graphql');

const DocumentTypeModel = require('../../mongoose/models/doumentType');
const documentType = require('../documentType');

const ReadDocType = new GraphQLObjectType({
  name: 'find',
  fields: {
    docimentTypes: {
      type: new GraphQLList(documentType),
      resolve: async () => {
        const docTypes = await DocumentTypeModel.find();
        if (!docTypes) {
          throw new Error('error while fetching data');
        }
        return docTypes;
      },
    },
  },
});


module.exports = ReadDocType;
