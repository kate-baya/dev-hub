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

function addToFavorites (user_id, project_id, title, db = connection) {
  return db('favorite-projects')
  .insert({user_id, project_id, title})
}

function getFavorites (id, db = connection) {
  return db('favorite-projects')
  .where('user_id', id)
  // .join('projects', 'favorite-projects.project_id', 'projects.id')
  .select()
}

module.exports = {
  saveProject,
  getProjects,
  getUserProjects,
  addToFavorites,
  getFavorites
}