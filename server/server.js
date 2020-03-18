
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const argv = require('minimist')(process.argv.slice(2));
const schema = require('./graphql/schema');
require('dotenv').config();

const dbURILocal = require('./config').mongoURI;
const dbURICloud = require('./config').mongoCloud(process.env.MONGO_USER, process.env.MONGO_PASSWORD);
const isAuth = require('./middleware/is-auth');

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

mongoose.set('debug', true);
const source = argv.source || 'mongo';

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.get('/', (req, res) => {
  res.send('200 OK');
});


const dbURI = source === 'cloud' ? dbURICloud : dbURILocal;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
}).then(() => {
  console.log('MongoDB database connection established successfully');
}).catch((err) => {
  console.log(`Error: ${err}`);
});


app.listen(PORT, () => {
  console.log(`😎 Server is running on Port: ${PORT}`);
});
