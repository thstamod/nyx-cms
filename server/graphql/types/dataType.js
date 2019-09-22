const {
 GraphQLObjectType, GraphQLString,
} = require('graphql');

const dataType = new GraphQLObjectType({
  name: 'DataType',
  fields: {
    name: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    options: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLString,
    },
  },
});

module.exports = dataType;
