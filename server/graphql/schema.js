const { GraphQLSchema } = require('graphql');
const query = require('./query');
const Mutations = require('./mutations');


const schema = new GraphQLSchema({
  query,
  mutation: Mutations,
});

module.exports = schema;
