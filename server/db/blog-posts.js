const connection = require('./connection')

function getPosts (db = connection) {
  return db('blog-posts').select()
}

function savePost (post, db = connection) {
  return db('blog-posts')
  .insert(post)
}

module.exports = {
  getPosts,
  savePost
}