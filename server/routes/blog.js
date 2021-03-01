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

module.exports = router
