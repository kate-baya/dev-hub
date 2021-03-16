const connection = require('./connection')

function saveProject (title, about, user_id, db = connection) {
  return db('projects')
  .insert({title, about, user_id})
}

function getProjects (db = connection) {
  return db('projects')
  .select()
}

module.exports = {
  saveProject,
  getProjects
}