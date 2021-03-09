const connection = require('./connection')

function saveProject (project, db = connection) {
  return db('projects')
  .insert(project)
}

module.exports = {
  saveProject
}