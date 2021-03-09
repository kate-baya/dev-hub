const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')
const blog = require('./routes/blog')
const project = require('./routes/project')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1', blog)
server.use('/api/v1', project)

module.exports = server
