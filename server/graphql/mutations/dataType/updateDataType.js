const { GraphQLString, GraphQLNonNull } = require('graphql');

const DataTypeModel = require('../../../mongoose/models/dataType');
const dataType = require('../../types/dataType');


const updateDataType = {
  type: dataType,
  args: {
    id: {
      type: GraphQLString,
    },
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
    const updated = await DataTypeModel.findOneAndUpdate({ id: args.id }, args, { new: true });
    if (!updated) {
      throw new Error('Error');
    }
    return updated;
  },

};

module.exports = updateDataType;
