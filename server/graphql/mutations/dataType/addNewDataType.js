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
  resolve: async (parent, args) => {
    args.creator = "5e5413f7802939338e8f4d95"
    const uModel = new DataTypeModel(args);
    const newDataType = await uModel.save();
    if (!newDataType) {
      throw new Error('error');
    }
    return newDataType;
  },
};

module.exports = addNewDataType;
