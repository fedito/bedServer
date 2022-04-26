const express = require('express')

const app = express()
require('dotenv').config();

//Servir consenido estatico
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8080)