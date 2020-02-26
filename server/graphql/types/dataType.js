const {
  GraphQLObjectType, GraphQLString,
} = require('graphql');

const userModel = require('../../mongoose/models/user');
const userType = require('./user');

const dataType = new GraphQLObjectType({
  name: 'DataType',
  fields: {
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    options: {
      type: GraphQLString,
    },
    dateCreated: {
      type: GraphQLString
    },
    creator: {
      type: userType,
      resolve: async (parent, args) => {
        const res = await userModel.findById(parent.creator);
        return res;
      }
    }
  },
});

module.exports = dataType;
