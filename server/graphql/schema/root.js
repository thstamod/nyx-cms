const {
  GraphQLID, GraphQLList, GraphQLSchema
} = require('graphql')
const documentType = require('./documentType')

exports.schema = new GraphQLSchema({
  name: 'root',
  fields: {
    tree: {
      type: new GraphQLList(documentType), // <-- note type
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(_, args) {
        // <-- the interesting part
        return args.id ? repo.find(args.id) : repo.findAll()
      }
    }
  }
})
