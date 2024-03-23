const express = require('express');
const router = express.Router();
const wasteController = require('../controllers/wasteController');

router
.route('/')
.get(wasteController.wasteItems)
.post(wasteController.addWasteItem);

router
.route('/:id')
.put(wasteController.editWasteItem);

module.exports = router;