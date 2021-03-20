
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blog-posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog-posts').insert([
        {id: 1, user_id: '', title: 'first post', post: 'Hello! This is my first blog post', project_id: 1},
        {id: 2, user_id: '', title: 'second post', post: 'I am testing these posts', project_id: 1},
        {id: 3, user_id: '', title: 'third post', post: 'This is the third entry in my blog-post database', project_id: 2}
      ]);
    });
};
