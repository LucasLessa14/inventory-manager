exports.seed = function(knex) {
  return knex('compartment').del()
    .then(function () {
      return knex('compartment').insert([
        { name: 'Armário 01 - Gaveta 01', amount: 0 },
        { name: 'Armário 01 - Gaveta 02', amount: 0 },
        { name: 'Armário 01 - Gaveta 03', amount: 0 }
      ]);
    });
};
