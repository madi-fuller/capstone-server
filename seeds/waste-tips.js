const tipsData = require('../seed-data/tips.js');

exports.seed = async function(knex) {
  // Deletes all existing entries in the 'waste_items' table
  await knex('food_waste_tips').del();

  // Inserts waste items data into the 'waste_items' table
  await knex('food_waste_tips').insert(tipsData);
};