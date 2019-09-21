
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const argv = require('minimist')(process.argv.slice(2));
const schema = require('./graphql/schema');

const dbURI = require('./config').mongoURI;

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());


const env = argv.source || 'mongo';

if (env === 'mock') {
  console.log('data from mock');
} else {
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
  });
  mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: global,
  }),
);

app.get('/', (req, res) => {
  res.send('200 OK');
});
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
