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



module.exports = {
    userProfile
}