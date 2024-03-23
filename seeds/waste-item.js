const wasteItemsData = require('../seed-data/waste.js');

exports.seed = async function(knex) {
  // Deletes all existing entries in the 'waste_items' table
  await knex('waste_items').del();

  // Inserts waste items data into the 'waste_items' table
  await knex('waste_items').insert(wasteItemsData);
};