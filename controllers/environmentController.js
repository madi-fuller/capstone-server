const knex = require("knex")(require("../knexfile.js"));

const environmentImpact = async (req, res) => {
  try {
    const data = await knex("environmental_impacts").where({
      id: req.params.id,
    });

    if (data.length === 0) {
        return res.status(404).json({
            message: `Item with ID ${req.params.id} was not found`
        });
    }
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .send(`Error retrieving environmental impact information ${error}`);
  }
};

module.exports = {
  environmentImpact,
};
