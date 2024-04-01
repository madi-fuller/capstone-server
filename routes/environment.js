const express = require("express");
const router = express.Router();
const environmentController = require("../controllers/environmentController");

router.route("/").post(environmentController.addEnvironmentalImpacts);

router.route("/carbon").get(environmentController.getTotalC02Emissions);

router.route("/:name").get(environmentController.environmentImpact);

module.exports = router;
