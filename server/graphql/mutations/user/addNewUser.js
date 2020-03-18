const {
  GraphQLNonNull, GraphQLString, GraphQLInt,
} = require('graphql');
const bcrypt = require('bcryptjs');
const UserModel = require('../../../mongoose/models/user');
const userType = require('../../types/user');


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
  resolve: async (parent, args) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const user = await UserModel.findOne({ email: args.email });
      if (user) {
        throw new Error('User already exists');
      }
      return bcrypt.hash(args.password, 12).then((hashedPassword) => {
        const model = args;
        model.dateCreated = (new Date()).toISOString();
        model.password = hashedPassword;
        const uModel = new UserModel(model);
        return uModel.save().then((usr) => ({ ...usr._doc }));
      });
    } catch (err) { throw err; }
  },
};

module.exports = addNewUser;
