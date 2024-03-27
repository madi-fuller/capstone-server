const express = require("express");
const router = express.Router();
const wasteController = require("../controllers/wasteController");

router
  .route("/")
  .get(wasteController.wasteItems)
  .post(wasteController.addWasteItem);

router
  .route("/pie-data")
  .get(wasteController.wastedItemsByCategory);

router
  .route("/line-data")
  .get(wasteController.wastedItemsByDate);
router
  .route("/:id")
  .put(wasteController.editWasteItem)
  .delete(wasteController.deleteWasteItem);

module.exports = router;
