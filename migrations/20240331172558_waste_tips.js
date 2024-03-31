/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('food_waste_tips', function(table) {
      table.increments('id').primary();
      table.string('tip_text', 255).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('food_waste_tips');
  };