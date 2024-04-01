const knex = require("knex")(require("../knexfile.js"));

const environmentImpact = async (req, res) => {
  try {
    const data = await knex("environmental_impacts").where({
      name: req.params.name,
    });

    if (data.length === 0) {
      return res.status(404).json({
        message: `Item with ID ${req.params.name} was not found`,
      });
    }
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .send(`Error retrieving environmental impact information ${error}`);
  }
};

const getTotalC02Emissions = async (_req, res) => {
  try {
    const data = await knex("environmental_impacts")
      .sum("carbon_footprint as totalCarbonFootprint")
      .sum("energy_consumption as totalEnergyConsumption");

    const totalC02 =
      (data[0].totalCarbonFootprint || 0) +
      (data[0].totalEnergyConsumption || 0);

    res.status(200).json(totalC02);
  } catch (error) {
    res.status(500).send(`Error calculating total C02 emissions ${error}`);
  }
};

const addEnvironmentalImpacts = async (req, res) => {
  try {
    const {
      name,
      carbon_footprint,
      water_usage,
      land_usage,
      packaging,
      energy_consumption,
    } = req.body;
    if (
      !name ||
      !carbon_footprint ||
      !water_usage ||
      !land_usage ||
      !packaging ||
      !energy_consumption
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newEnvironmentalImpacts = {
      name,
      carbon_footprint,
      water_usage,
      land_usage,
      packaging,
      energy_consumption,
    };
    const result = await knex("environmental_impacts").insert(
      newEnvironmentalImpacts
    );
    const newEnvironmentalImpactsId = result[0];
    const createdEnvironmentalImpacts = await knex(
      "environmental_impacts"
    ).where({
      id: newEnvironmentalImpactsId,
    });

    res.status(201).json(createdEnvironmentalImpacts);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Unable to add new environmental impacts : ${error}` });
  }
};

module.exports = {
  environmentImpact,
  getTotalC02Emissions,
  addEnvironmentalImpacts,
};
