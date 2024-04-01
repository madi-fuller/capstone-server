const environmentData = require('../seed-data/environment.js');

exports.seed = async function(knex) {
  // Deletes all existing entries in the 'waste_items' table
  await knex('environmental_impacts').del();

  // Inserts waste items data into the 'waste_items' table
  await knex('environmental_impacts').insert(environmentData);
};