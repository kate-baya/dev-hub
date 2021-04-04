exports.up = function (knex) {
  return knex.schema.createTable('favorite-projects', table => {
    table.increments('id')
    table.string('user_id')
    table.integer('project_id')
    table.string('title')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('favorite-projects')
}
