// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: process.env.SQLITE_DB_PATH
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  staging: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: process.env.SQLITE_DB_PATH
    },
    migrations: {
      directory: './database/migrations'
    }
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: process.env.SQLITE_DB_PATH
    },
    migrations: {
      directory: './database/migrations'
    }
  }

};
