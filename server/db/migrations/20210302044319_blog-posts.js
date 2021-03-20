
exports.up = function(knex) {
  return knex.schema.createTable('blog-posts', table => {
    table.increments('id')
    table.string('user_id')
    table.string('title')
    table.string('post')
    table.string('project_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('blog-posts')
};
