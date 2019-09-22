const { GraphQLObjectType } = require('graphql');
const addNewDocumentType = require('./mutations/addNewDocumentType');
const addNewDataType = require('./mutations/addNewDataType');

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addNewDocumentType,
    addNewDataType,
  },
});

module.exports = Mutations;
