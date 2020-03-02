const {
  GraphQLNonNull, GraphQLString,
} = require('graphql');

const DataTypeModel = require('../../../mongoose/models/dataType');
const dataType = require('../../types/dataType');


const addNewDataType = {
  type: dataType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    type: {
      type: new GraphQLNonNull(GraphQLString),
    },
    options: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized')
    }
    args.creator = req.userId;
    const uModel = new DataTypeModel(args);
    const newDataType = await uModel.save();
    if (!newDataType) {
      throw new Error('error');
    }
    return newDataType;
  },
};

module.exports = addNewDataType;
