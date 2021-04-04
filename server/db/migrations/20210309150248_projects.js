exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('user_id')
    table.string('user_name')
    table.string('title')
    table.string('about')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
