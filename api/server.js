const express = require('express')
const server = express()
const middleware = require('./middleware')

server.use(express.json())
middleware(server)

server.get("/", (req, res) => {
  res.send("<h2>I am your travel server.</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "The path you requested does not exist. Please try again."})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "Ooops. There seems to be an issue with the server. Sorry."})
})

module.exports = server;