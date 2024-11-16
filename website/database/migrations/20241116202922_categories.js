/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('categories').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('categories', function(table) {
        table.increments('category_id'); // Incremental ID
        table.string('category_name'); // String
        table.string('category_description'); // String
        table.datetime('created_at').defaultTo(knex.fn.now()); // Datetime
        table.datetime('modified_at').defaultTo(knex.fn.now()); // Datetime
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('categories');
};
