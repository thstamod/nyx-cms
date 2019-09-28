const { GraphQLList, GraphQLString } = require('graphql');

const DataTypeModel = require('../../mongoose/models/dataType');
const dataType = require('../types/dataType');

const GetDataTypes = {
  type: new GraphQLList(dataType),
  args: { _id: { type: GraphQLString } },
  resolve: async (parent, args) => {
    const datTypes = await DataTypeModel.findById(args._id);
    if (!datTypes) {
      throw new Error('error while fetching data');
    }
    return datTypes;
  },
};


module.exports = GetDataTypes;
