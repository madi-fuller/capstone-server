
const userData = require('../seed-data/user.js');

exports.seed = async function(knex) {
  // Deletes all existing entries in the 'waste_items' table
  await knex('users').del();

  // Inserts waste items data into the 'waste_items' table
  await knex('users').insert(userData);
};