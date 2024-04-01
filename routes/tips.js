const express = require("express");
const router = express.Router();
const tipsController = require ("../controllers/tipsController.js");

router 
    .route("/")
    .get(tipsController.wasteTips);

module.exports = router;
