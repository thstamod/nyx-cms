const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLO,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');
const DataTypeModel = require('../../mongoose/models/dataType');
const DocumentTypeModel = require('../../mongoose/models/documentType');
const userModel = require('../../mongoose/models/user');
const userType = require('./user');
const dataType = require('./dataType');

const { timestampToISO } = require('../../utils');

const documentType = new GraphQLObjectType({
  name: 'DocumentType',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    parentDocumentType: {
      type: GraphQLString,
    },
    inheritFrom: {
      type: GraphQLString,
    },
    privileges: {
      type: GraphQLString,
    },
    descendants: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'descendants',
          fields: {
            documentType: {
              type: documentType,
              resolve: async (parent) => {
                const res = await DocumentTypeModel.findById(parent);
                return res;
              },
            },
          },
        })
      ),
    },
    compilation: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'compilation',
          fields: {
            compilationItemId: {
              type: GraphQLString,
            },
            title: {
              type: GraphQLString,
            },
            description: {
              type: GraphQLString,
            },
            options: {
              type: GraphQLJSONObject,
            },
            value: {
              type: GraphQLJSONObject,
            },
            dataType: {
              type: dataType,
              resolve: async (parent) => {
                const res = await DataTypeModel.findById(parent.dataTypeId);
                return res;
              },
            },
          },
        })
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
  }),
});

module.exports = documentType;
