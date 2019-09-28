const { GraphQLObjectType } = require('graphql');
const GetDocunemtTypes = require('./queries/GetDocumentTypes');
const GetDataTypes = require('./queries/GetDataTypes');
const GetDocunemtType = require('./queries/GetDocumentType');
const GetDataType = require('./queries/GetDataType');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    GetDocunemtTypes,
    GetDocunemtType,
    GetDataTypes,
    GetDataType,
  },
});

module.exports = query;
