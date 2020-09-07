module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "inventory",
      user: "docker",
      password: "docker"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/database/seeds`
    }
  }

};
