const { GraphQLString } = require('graphql');

const UserModel = require('../../mongoose/models/user');
const authData = require('../types/authData');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwtPassphrase = require('../../config')

const login = {
  type: authData,
  args: { email: { type: GraphQLString }, password: { type: GraphQLString } },
  resolve: async (parent, args) => {

    const user = await UserModel.findOne({ email: args.email });
    if (!user) {
      throw new Error('no user exists');
    }
    const isEqual = await bcrypt.compare(args.password, user.password)
    if (!isEqual) {
      throw new Error('wrong password')
    }
    const token = jwt.sign({
      userId: user._id,
      email: user.email,
      name: user.name
    }, jwtPassphrase, { expiresIn: '1h' })
    return {
      userId: user._id,
      token,
      tokenExpiration: 1
    }
  }
};


module.exports = login;
