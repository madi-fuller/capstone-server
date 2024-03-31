const knex = require("knex")(require("../knexfile.js"));

const wasteTips = async (_req, res) => {
    try {
       const data = await knex("food_waste_tips");
       res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving waste tips:, ${error}`);
    }
};

module.exports = {
    wasteTips
};