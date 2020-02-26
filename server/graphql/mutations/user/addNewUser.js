const {
  GraphQLNonNull, GraphQLString, GraphQLInt
} = require('graphql');
const UserModel = require('../../../mongoose/models/user');
const userType = require('../../types/user');

const bcrypt = require('bcryptjs');


const addNewUser = {
  type: userType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    authorization: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLString,
    },
    // dateCreated: {
    //  type: new GraphQLNonNull(GraphQLString),
    // }
  },
  resolve: (parent, args) => {
    return UserModel.findOne({ email: args.email }).then(user => {
      if (user) {
        throw new Error('User already exists')
      }
      return bcrypt.hash(args.password, 12)
    }).then(hashedPassword => {
      args.dateCreated = (new Date).toISOString();
      args.password = hashedPassword;
      const uModel = new UserModel(args);
      return uModel.save().then(user => { return { ...user._doc } });
    }).catch(err => { throw err })

  },
};

module.exports = addNewUser;
