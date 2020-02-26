const {
  GraphQLObjectType, GraphQLString,
} = require('graphql');

const userModel = require('../../mongoose/models/user');
const userType = require('./user');
const { timestampToISO } = require('../../utils')

const dataType = new GraphQLObjectType({
  name: 'DataType',
  fields: {
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    },
    options: {
      type: GraphQLString
    },
    creator: {
      type: userType,
      resolve: async (parent, args) => {
        const res = await userModel.findById(parent.creator);
        return res;
      }
    },
    createdAt: {
      type: GraphQLString,
      resolve: (parent, args) => {
        return timestampToISO(parent.createdAt);
      }
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (parent, args) => {
        return timestampToISO(parent.updatedAt);
      }
    }
  },
});

module.exports = dataType;
