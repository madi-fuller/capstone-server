const knex = require("knex")(require("../knexfile.js"));

const userProfile = async (req, res) => {
    try {
        const data = await knex("users").where({id: req.params.id,});
        res.status(200).json(data);
    }catch (error) {
        res
        .status(500)
        .send(`Error retrieving environmental impact information ${error}`);
    }
};

const addUser = async (req, res) => {
    try {
        const {name, reason_for_reducing} = req.body;

        if(!name || !reason_for_reducing) {
            return res.status(400).json({message: "Missing required fields"});
        }
        const newUser = {name, reason_for_reducing};
        const result = await knex("users").insert(newUser);
        const newUserId = result[0];
        const createdUser = await knex("users").where({id: newUserId});

        res.status(201).json(createdUser);
    }catch (error) {
        res.status(500).json({message: `Unable to add new user: ${error}`});
    }
};

module.exports = {
    userProfile,
    addUser
}