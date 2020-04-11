const { GraphQLObjectType } = require('graphql');
const documentTypes = require('./queries/GetDocumentTypes');
const dataTypes = require('./queries/GetDataTypes');
const documentType = require('./queries/GetDocumentType');
const dataType = require('./queries/GetDataType');
const login = require('./queries/login');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    documentTypes,
    documentType,
    dataTypes,
    dataType,
    login,
  },
});

module.exports = query;
