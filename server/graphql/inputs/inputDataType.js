const {
  GraphQLString, GraphQLInputObjectType,
} = require('graphql');

const InputDataType = new GraphQLInputObjectType({
  name: 'InputDataType',
  fields: {
    dataTypeId: {
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

module.exports = InputDataType;
