const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema/root')

const dbURI = require('./config').mongoURI

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true
  },
  (err) => {
    if (err) {
      console.log(err)
    }
  }
)
const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/', (req, res) => {
  res.send('200 OK')
})
app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT)
})
