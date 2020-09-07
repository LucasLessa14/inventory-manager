exports.up = knex => knex.schema.createTable('component', table => {
    table.increments('id');
    table.text('name').unique().notNullable();
    table.integer('amount').notNullable();

    table.integer('category_id').unsigned();
    table.foreign('category_id').references('category.id');

    table.integer('compartment_id').unsigned();
    table.foreign('compartment_id').references('compartment.id');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('component');
