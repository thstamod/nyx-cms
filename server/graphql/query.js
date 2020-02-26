const { GraphQLObjectType } = require('graphql');
const docunemtTypes = require('./queries/GetDocumentTypes');
const dataTypes = require('./queries/GetDataTypes');
const docunemtType = require('./queries/GetDocumentType');
const dataType = require('./queries/GetDataType');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    docunemtTypes,
    docunemtType,
    dataTypes,
    dataType,
  },
});

module.exports = query;
