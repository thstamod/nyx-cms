module.exports = {
  mongoURI: 'mongodb://localhost:27017/nyx-cms',
  mongoCloud: (username, password) => `mongodb+srv://${username}:${password}@cluster0-gcvls.mongodb.net/test?retryWrites=true&w=majority`,
  jwtPassphrase: 'someprivatekey',
};
