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
    const uModel = new DataTypeModel({
      name: args.name,
      type: args.type,
      options: args.options,
      value: args.value,
    });
    const newDataType = await uModel.save();
    if (!newDataType) {
      throw new Error('error');
    }
    return newDataType;
  },
};

module.exports = addNewDataType;
