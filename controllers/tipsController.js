const knex = require("knex")(require("../knexfile.js"));

const wasteTips = async (_req, res) => {
    try {
        const data = await knex("food_waste_tips").orderByRaw("RAND()").limit(3);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving random waste tips: ${error}`);
    }
};

module.exports = {
    wasteTips
};