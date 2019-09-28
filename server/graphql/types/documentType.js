const {
  GraphQLObjectType, GraphQLString, GraphQLList,
} = require('graphql');
const DataTypeModel = require('../../mongoose/models/dataType');
const dataType = require('./dataType');


const documentType = new GraphQLObjectType({
  name: 'DocumentType',
  fields: {
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    publicUrl: {
      type: GraphQLString,
    },
    inheritFrom: {
      type: GraphQLString,
    },
    privileges: {
      type: GraphQLString,
    },
    dataTypes: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'dataTypes',
        fields: {
          dataTypeId: {
            type: GraphQLString,
          },
          options: {
            type: GraphQLString,
          },
          value: {
            type: GraphQLString,
          },
          dataType: {
            type: dataType,
            resolve: async (parent, args) => {
              const res = await DataTypeModel.findById(parent.dataTypeId);
              return res;
            },
          },
        },
      })),
    },
  },
});

module.exports = documentType;
