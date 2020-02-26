const {
  GraphQLObjectType, GraphQLString, GraphQLInt
} = require('graphql');

const user = new GraphQLObjectType({
  name: 'user',
  fields: {
    _id: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    // password: {
    //   type: GraphQLString,
    // },
    authorization: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    dateCreated: {
      type: GraphQLString,
    }
  },
});

module.exports = user;


