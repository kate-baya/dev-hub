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
    res.status(500).json({message: 'This route is not working correctly'})
  })
})

router.post('/addBlog', (req, res) => {
  const {blogPost, user_id} = req.body
  const {title, post, project_id} = blogPost
  console.log(req.body)
  db.savePost( user_id, title, post, project_id)
  .then(newPost => {
    res.status(201).json(newPost)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'This route is not working correctly'})
  })
})

module.exports = router
