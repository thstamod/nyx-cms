const { GraphQLObjectType } = require('graphql');
const GetDocunemtTypes = require('./queries/DocumentTypes');
const GetDataTypes = require('./queries/DataTypes');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    GetDocunemtTypes,
    GetDataTypes,
  },
});

module.exports = query;
