const {
 GraphQLObjectType, GraphQLString,
} = require('graphql');

const documentType = new GraphQLObjectType({
  name: 'DocumentType',
  fields: {
    id: {
      type: GraphQLString,
    },
    publicUrl: {
      type: GraphQLString,
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
});

module.exports = documentType;
