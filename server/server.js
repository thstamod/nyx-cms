const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const dbURI = require('./config').mongoURI

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

mongoose.connect(dbURI, {
  useNewUrlParser: true
})
const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
  res.send('200 OK')
})
app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT)
})
