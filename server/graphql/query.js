const { GraphQLObjectType } = require('graphql');
const getDocunemtTypes = require('./queries/GetDocumentTypes');
const getDataTypes = require('./queries/GetDataTypes');
const getDocunemtType = require('./queries/GetDocumentType');
const getDataType = require('./queries/GetDataType');
const login = require('./queries/login');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getDocunemtTypes,
    getDocunemtType,
    getDataTypes,
    getDataType,
    login
  }
});

module.exports = query;
