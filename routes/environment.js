const express = require("express");
const router = express.Router();
const environmentController = require("../controllers/environmentController");

router
    .route("/")
    .get(environmentController.environmentImpact);

module.exports = router;