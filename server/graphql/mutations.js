const { GraphQLObjectType } = require('graphql');
const addNewDocumentType = require('./mutations/documentType/addNewDocumentType');
const addNewDataType = require('./mutations/dataType/addNewDataType');

const updateDocumentType = require('./mutations/documentType/updateDocumentType');
const updateDataType = require('./mutations/dataType/updateDataType');

const deleteDocumentType = require('./mutations/documentType/deleteDocumentType');
const deleteDataType = require('./mutations/dataType/deleteDataType');

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addNewDocumentType,
    addNewDataType,
    updateDocumentType,
    updateDataType,
    deleteDocumentType,
    deleteDataType,
  },
});

module.exports = Mutations;
