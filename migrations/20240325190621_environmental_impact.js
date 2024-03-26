/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('environmental_impacts', function(table) {
      table.increments('id').primary(); // Auto-incrementing ID as primary key
      table.string('name').unique().notNullable(); // Name of the food item (unique)
      table.float('carbon_footprint'); // Carbon footprint of the food item (in kg CO2 equivalent)
      table.float('water_usage'); // Water usage of the food item (in liters)
      table.float('land_usage'); // Land usage of the food item (in square meters)
      table.float('packaging'); // Packaging material usage for the food item (in kg or another appropriate unit)
      table.float('energy_consumption'); // Energy consumption during production (in kWh or another appropriate unit)
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp of when the environmental impact data was logged
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('environmental_impacts');
  };
