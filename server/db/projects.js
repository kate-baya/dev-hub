const connection = require('./connection')

function saveProject (title, about, user_id, db = connection) {
  return db('projects')
  .insert({title, about, user_id})
}

function getProjects (db = connection) {
  return db('projects')
  .select()
}

function getUserProjects (userId, db = connection) {
  return db('projects')
  .select()
  .where('user_id', userId)
}

function addToFavorites (user_id, project_id, db = connection) {
  return db('favorite-projects')
  .insert({user_id, project_id})
}

module.exports = {
  saveProject,
  getProjects,
  getUserProjects,
  addToFavorites
}