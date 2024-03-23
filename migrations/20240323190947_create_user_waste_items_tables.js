/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('waste_items', function(table) {
      table.increments('id').primary(); // Auto-incrementing ID as primary key
      table.string('name').notNullable(); // Name of the wasted item
      table.string('category'); // Category of the wasted item
      table.integer('quantity').unsigned().notNullable(); // Quantity of the wasted item
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp of when the waste item was logged
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('waste_items');
  };
