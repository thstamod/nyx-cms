const { GraphQLString } = require('graphql');

const DataTypeModel = require('../../mongoose/models/dataType');
const dataType = require('../types/dataType');

const GetDataType = {
  type: dataType,
  args: { _id: { type: GraphQLString } },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const datTypes = await DataTypeModel.findById(args._id);
    if (!datTypes) {
      throw new Error('error while fetching data');
    }
    return datTypes;
  },
};


module.exports = GetDataType;
