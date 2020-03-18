const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const DataTypeModel = require('../../mongoose/models/dataType');
const userModel = require('../../mongoose/models/user');
const userType = require('./user');
const dataType = require('./dataType');

const { timestampToISO } = require('../../utils');

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
    compilation: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'compilation',
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
              resolve: async (parent) => {
                const res = await DataTypeModel.findById(parent.dataTypeId);
                return res;
              },
            },
          },
        }),
      ),
    },
    creator: {
      type: userType,
      resolve: async (parent) => {
        const res = await userModel.findById(parent.creator);
        return res;
      },
    },
    createdAt: {
      type: GraphQLString,
      resolve: (parent) => timestampToISO(parent.createdAt),
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (parent) => timestampToISO(parent.updatedAt),
    },
  },
});

module.exports = documentType;
