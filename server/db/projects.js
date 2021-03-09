const connection = require('./connection')

function saveProject (project, db = connection) {
  return db('projects')
  .insert(project)
}

function getProjects (db = connection) {
  return db('projects')
  .select()
}

module.exports = {
  saveProject,
  getProjects
}