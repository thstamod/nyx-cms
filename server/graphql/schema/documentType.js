const {
  GraphQLID, GraphQLObjectType, GraphQLString
} = require('graphql')

exports.documentType = new GraphQLObjectType({
  name: 'DocumentType',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    publicUrl: {
      type: GraphQLString
    },
    inheritFrom: {
      type: GraphQLString
    },
    privileges: {
      type: GraphQLString
    },
    dataTypes: {
      type: GraphQLString
    }
  })
})
