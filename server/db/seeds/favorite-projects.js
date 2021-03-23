
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorite-projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite-projects').insert([
        {id: 1, user_id: '105315951604146958822', project_id: 2},
        {id: 2, user_id: '105315951604146958822', project_id: 3},
        {id: 3, user_id: '105315951604146958822', project_id: 4},
        {id: 4, user_id: '105315951604146958822', project_id: 5},
        {id: 5, user_id: '105315951604146958822', project_id: 6}
      ]);
    });
};
