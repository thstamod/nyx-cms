const {
  GraphQLNonNull, GraphQLString, GraphQLObjectType,
} = require('graphql');

const DocumentTypeModel = require('../../mongoose/models/doumentType');
const documentType = require('../types/documentType');
const { uniqueID } = require('../../utils');


const addNewDocumentType = {
  type: documentType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    publicUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    inheritFrom: {
      type: GraphQLString,
    },
    privileges: {
      type: GraphQLString,
    },
    dataTypes: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args) => {
    const uModel = new DocumentTypeModel({
      id: uniqueID(),
      name: args.name,
      publicUrl: args.publicUrl,
      inheritFrom: args.inheritFrom,
      privileges: args.privileges,
      dataTypes: args.dataTypes,
    });
    const newDocType = await uModel.save();
    if (!newDocType) {
      throw new Error('error');
    }
    return newDocType;
  },
};

module.exports = addNewDocumentType;
