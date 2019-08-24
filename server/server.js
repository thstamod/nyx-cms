const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const helmet = require("helmet")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = 4000
const dbURI = require("./config").mongoURI

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

mongoose.connect(dbURI, { useNewUrlParser: true })
const connection = mongoose.connection

connection.once("open", function() {
  console.log("MongoDB database connection established successfully")
})

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT)
})
