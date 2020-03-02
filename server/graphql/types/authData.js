const {
  GraphQLObjectType, GraphQLString, GraphQLInt
} = require('graphql');

const authData = new GraphQLObjectType({
  name: 'authData',
  fields: {
    userId: {
      type: GraphQLString,
    },
    token: {
      type: GraphQLString
    },
    tokenExpiration: {
      type: GraphQLInt
    }
  }
});

module.exports = authData;
