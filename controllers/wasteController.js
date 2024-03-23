const knex = require("knex")(require("../knexfile.js"));

const wasteItems = async(_req, res) => {
    try {
        const data = await knex('waste_items')
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving waste item list: ${error}`);
    }
}

module.exports = {
    wasteItems
};