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

router.post('/favorite/:user_id/:project_id/:title', (req, res) => {
  const userId = req.params.user_id
  const projectId = req.params.project_id
  const title = req.params.title
  db.addToFavorites(userId, projectId, title)
  .then(newFavorite => {
    res.status(201).json(newFavorite)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'This route is not working correctly'})
  })
})

router.get('/favorite/:id', (req, res) => {
  const id = req.params.id
  db.getFavorites(id)
  .then(favorites => {
    res.json(favorites)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'This route is not working correctly'})
  })
})

module.exports = router