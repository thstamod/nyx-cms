const { GraphQLObjectType } = require('graphql');
const addNewDocumentType = require('./mutations/documentType/addNewDocumentType');
const addNewDataType = require('./mutations/dataType/addNewDataType');

const updateDocumentType = require('./mutations/documentType/updateDocumentType');
const updateDataType = require('./mutations/dataType/updateDataType');

const deleteDocumentType = require('./mutations/documentType/deleteDocumentType');
const deleteDataType = require('./mutations/dataType/deleteDataType');

const addNewUser = require('./mutations/user/addNewUser');

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addNewUser,
    addNewDocumentType,
    addNewDataType,
    updateDocumentType,
    updateDataType,
    deleteDocumentType,
    deleteDataType,
  },
});

module.exports = Mutations;
