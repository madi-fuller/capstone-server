const knex = require("knex")(require("../knexfile.js"));

const environmentImpact = async (_req, res) => {
    try {
        const data = await knex ("environmental_impacts");
        res.status(200).json(data);
    }catch (error) {
        res.status(400).send(`Error retrieving environmental impact information ${error}`);
    }
};

module.exports = {
    environmentImpact
};