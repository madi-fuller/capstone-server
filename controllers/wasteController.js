const {
  up,
} = require("../migrations/20240323190947_create_user_waste_items_tables.js");

const knex = require("knex")(require("../knexfile.js"));

const wasteItems = async (_req, res) => {
  try {
    const data = await knex("waste_items");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving waste item list: ${error}`);
  }
};

const addWasteItem = async (req, res) => {
  try {
    const { name, category, quantity } = req.body;

    if (!name || !category || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newWasteItem = { name, category, quantity };
    const result = await knex("waste_items").insert(newWasteItem);
    const newWasteItemId = result[0];
    const createdWasteItem = await knex("waste_items").where({
      id: newWasteItemId,
    });

    res.status(201).json(createdWasteItem);
  } catch (error) {
    res.status(500).json({ message: `Unable to add new waste item: ${error}` });
  }
};

const editWasteItem = async (req, res) => {
  try {
    const rowsUpdated = await knex("waste_items")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res.status(404).json({
        message: `Waste item with ID ${req.params.id} not found`,
      });
    }
    const updatedWasteItem = await knex("waste_items").where({
      id: req.params.id,
    });

    res.json(updatedWasteItem[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to edit data for item with ID ${req.params.id}`,
    });
  }
};

const deleteWasteItem = async (req, res) => {
  try {
    const rowDeleted = await knex("waste_items")
      .where({ id: req.params.id })
      .del();

    if (rowDeleted === 0) {
      return res
        .status(500)
        .json({ message: `Item with id: ${req.params.id} not found` });
    }
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: `Unable to delete warehouse: ${error}` });
  }
};

const wastedItemsByCategory = async (_req, res) => {
try {
    const categoryData = await knex("waste_items")
    .select("category")
    .count("* as count")
    .groupBy("category");

    const formattedData = [['Category', 'Quantity']];
    categoryData.forEach(item => {
        formattedData.push([item.category, item.count]);
    });

    res.status(200).json(formattedData);
} catch(error) {
    res.status(500).json({message: `Unable to count by category:, ${error}`})
}
}

const wastedItemsByDate = async (_req, res) => {
    try {
    const dateData = await knex("waste_items")
    .select("created_at")
    .count("* as count")
    .groupBy("created_at");

    const formattedData = [['Date', 'Count']];
    dateData.forEach(item => {
        formattedData.push([item.created_at, item.count]);
    });

    res.status(200).json(formattedData);
} catch(error) {
    res.status(500).json({message: `Unable to count by category:, ${error}`})
}
}



module.exports = {
  wasteItems,
  addWasteItem,
  editWasteItem,
  deleteWasteItem,
  wastedItemsByCategory,
  wastedItemsByDate
};
