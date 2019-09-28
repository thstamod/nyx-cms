const {
  GraphQLObjectType, GraphQLString,
} = require('graphql');
// const dataType = require('./dataType');


const documentType = new GraphQLObjectType({
  name: 'DocumentType',
  fields: {
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    publicUrl: {
      type: GraphQLString,
    },
    inheritFrom: {
      type: GraphQLString,
    },
    privileges: {
      type: GraphQLString,
    },
    // dataTypes: {
    // type: new GraphQLList(dataType),
  //  },
  },
});

module.exports = documentType;
