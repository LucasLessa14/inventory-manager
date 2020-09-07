exports.seed = function(knex) {
  return knex('category').del()
    .then(function () {
      return knex('category').insert([
        { name: 'Sistemas Embarcados', amount: 0 },
        { name: 'Eletrônica', amount: 0 },
        { name: 'CIs', amount: 0 }
      ]);
    });
};
