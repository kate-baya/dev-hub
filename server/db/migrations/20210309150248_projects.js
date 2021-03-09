
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('project_title')
    table.string('about')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};
