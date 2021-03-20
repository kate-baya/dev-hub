const connection = require('./connection')

function getPosts (db = connection) {
  return db('blog-posts').select()
}

function savePost (user_id, title, post, project_id, db = connection) {
  return db('blog-posts')
  .insert(user_id, title, post, project_id)
}

module.exports = {
  getPosts,
  savePost,
}
