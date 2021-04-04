const express = require('express')

const db = require('../db/projects')

const router = express.Router()

router.get('/project/projects', (req, res) => {
  db.getProjects()
    .then(projects => {
      res.json(projects)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

router.post('/newProject', (req, res) => {
  const { project, userId, userName } = req.body
  const { title, about } = project
  db.saveProject(title, about, userId, userName)
    .then(newProject => {
      res.status(201).json(newProject)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

router.get('/project/:id', (req, res) => {
  const id = req.params.id
  db.getProject(id)
    .then(project => {
      res.json(project)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

// user project list

router.get('/projects/:id', (req, res) => {
  const userId = req.params.id
  db.getUserProjects(userId)
    .then(projects => {
      res.json(projects)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

// favorites

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
      res.status(500).json({ message: 'This route is not working correctly' })
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
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

module.exports = router
