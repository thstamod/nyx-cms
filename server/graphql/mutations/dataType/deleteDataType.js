const { GraphQLString } = require('graphql');

const DataTypeModel = require('../../../mongoose/models/dataType');
const dataType = require('../../types/dataType');


const deleteDataType = {
  type: dataType,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args) => {
    const deleted = await DataTypeModel.findOneAndDelete({ id: args.id });
    if (!deleted) {
      throw new Error('Error');
    }
    return deleted;
  },

};

module.exports = deleteDataType;
