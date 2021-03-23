const express = require('express')

const db = require('../db/projects')

const router = express.Router()

router.post('/newProject', (req, res) => {
  const {project, user_id} = req.body
  const {title, about, favorite} = project
  db.saveProject(title, about, user_id, favorite)
  .then(newProject => {
    res.status(201).json(newProject)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'This route is not working correctly'})
  })
})

router.get('/projects', (req, res) => {
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

router.get('/projects/:id', (req, res) => {
  const userId = req.params.id
  db.getUserProjects(userId)
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