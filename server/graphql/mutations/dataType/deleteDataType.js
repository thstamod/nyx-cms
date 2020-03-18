const { GraphQLString } = require('graphql');

const DataTypeModel = require('../../../mongoose/models/dataType');
const dataType = require('../../types/dataType');


const deleteDataType = {
  type: dataType,
  args: {
    _id: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const deleted = await DataTypeModel.findByIdAndDelete({ _id: args._id });
    if (!deleted) {
      throw new Error('Error');
    }
    return deleted;
  },

};

module.exports = deleteDataType;
