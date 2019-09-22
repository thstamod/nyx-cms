const {
 GraphQLObjectType, GraphQLString,
} = require('graphql');

const documentType = new GraphQLObjectType({
  name: 'DocumentType',
  fields: {
    name: {
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
