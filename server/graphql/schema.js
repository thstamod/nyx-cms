const { GraphQLSchema } = require('graphql');
const query = require('./resolvers/readDocumentType');
const Mutation = require('./resolvers/addNewDocumentType');

const schema = new GraphQLSchema({
  query,
  mutation: Mutation,
});

module.exports = schema;
