const { GraphQLList } = require('graphql');

const DataTypeModel = require('../../mongoose/models/dataType');
const dataType = require('../types/dataType');

const GetDataTypes = {
  type: new GraphQLList(dataType),
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const datTypes = await DataTypeModel.find();
    if (!datTypes) {
      throw new Error('error while fetching data');
    }
    return datTypes;
  },
};


module.exports = GetDataTypes;
