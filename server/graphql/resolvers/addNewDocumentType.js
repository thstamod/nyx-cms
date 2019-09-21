const {
  GraphQLNonNull, GraphQLString, GraphQLID, GraphQLObjectType,
} = require('graphql');

const DocumentTypeModel = require('../../mongoose/models/doumentType');
const documentType = require('../documentType');


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addDocType: {
      type: documentType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
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
          id: args.id,
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
    },

  },
});

module.exports = Mutation;
