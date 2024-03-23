const knex = require("knex")(require("../knexfile.js"));

const wasteItems = async(_req, res) => {
    try {
        const data = await knex('waste_items')
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving waste item list: ${error}`);
    }
}

const addWasteItem = async (req, res) => {
    try {
        const newWasteItem = {...req.body};
        const result = await knex("waste_items").insert(newWasteItem);
        const newWasteItemId = result[0];
        const createdWasteItem = await knex("waste_items").where( { id: newWasteItemId});

        res.status(201).json(createdWasteItem);
    } catch(error) {
        res.status(500).json({message: `Unable to add new waste item: ${error}`});
    }
}

module.exports = {
    wasteItems,
    addWasteItem
};