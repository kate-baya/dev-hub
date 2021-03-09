const express = require('express')

const db = require('../db/projects')

const router = express.Router()

router.post('/newProject', (req, res) => {
  const project = req.body
  db.saveProject(project)
  .then(project => {
    res.status(201).json(project)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'This route is not working correctly'})
  })
})

router.get('/', (req, res) => {
  db.getProjects()
  .then(projects => {
    res.json(projects)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'This route is not working correctly'})
  })
})

module.exports = router