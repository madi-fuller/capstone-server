const express = require('express');
const router = express.Router();
const wasteController = require('../controllers/wasteController');

router
.route('/')
.get(wasteController.wasteItems)
.post(wasteController.addWasteItem);

module.exports = router;