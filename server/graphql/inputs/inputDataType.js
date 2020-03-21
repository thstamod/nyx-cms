const {
  GraphQLString, GraphQLInputObjectType, GraphQLNonNull,
} = require('graphql');

const InputDataType = new GraphQLInputObjectType({
  name: 'InputDataType',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    dataTypeId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    options: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLString,
    },
  },
});

module.exports = InputDataType;
