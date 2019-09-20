const {
  GraphQLID, GraphQLList, GraphQLSchema,
} = require('graphql');
const documentType = require('./documentType');

// console.log(documentType);

const schema = new GraphQLSchema({
  name: 'root',
  fields: {
    tree: {
      type: new GraphQLList(documentType),
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {

        return args.id ? repo.find(args.id) : repo.findAll();
      },
    },
  },
});

module.exports = schema;
