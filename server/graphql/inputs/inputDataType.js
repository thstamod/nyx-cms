const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');

const InputDataType = new GraphQLInputObjectType({
  name: 'InputDataType',
  fields: {
    compilationItemId: {
      type: GraphQLString,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    dataTypeId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    toBeDeleted: {
      type: new GraphQLNonNull(GraphQLBoolean),
      defaultValue: false,
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
