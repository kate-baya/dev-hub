const express = require('express')
const path = require('path')

const blog = require('./routes/blog')
const project = require('./routes/project')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', blog)
server.use('/api/v1', project)

module.exports = server
