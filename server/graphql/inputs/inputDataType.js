const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');

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
      type: GraphQLJSONObject,
    },
    value: {
      type: GraphQLJSONObject,
    },
  },
});

module.exports = InputDataType;
