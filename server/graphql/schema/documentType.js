const {
  GraphQLID, GraphQLObjectType, GraphQLString,
} = require('graphql');

const documentType = new GraphQLObjectType({
  name: 'DocumentType',
  fields: () => ({
    id: {
      // eslint-disable-next-line no-undef
      type: new GraphQLNonNull(GraphQLID),
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
  }),
});

module.exports = documentType;
