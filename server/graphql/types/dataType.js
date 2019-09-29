const {
  GraphQLObjectType, GraphQLString,
} = require('graphql');

const dataType = new GraphQLObjectType({
  name: 'DataType',
  fields: {
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    options: {
      type: GraphQLString,
    },
  },
});

module.exports = dataType;
