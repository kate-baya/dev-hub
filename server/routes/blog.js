const express = require('express')

const db = require('../db/blog-posts')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getProjectPosts(id)
    .then(posts => {
      res.json(posts)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

router.post('/addBlog', (req, res) => {
  const { blogPost, userId, userName } = req.body
  const { title, post, projectId } = blogPost
  db.savePost(userId, userName, title, post, projectId)
    .then(newPost => {
      res.status(201).json(newPost)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'This route is not working correctly' })
    })
})

module.exports = router
