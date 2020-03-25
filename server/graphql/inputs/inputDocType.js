const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = require('graphql');

const InputDocType = new GraphQLInputObjectType({
  name: 'InputDocType',
  fields: {
    documentTypeId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = InputDocType;
