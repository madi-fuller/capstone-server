const express = require('express');
const router = express.Router();
const wasteController = require('../controllers/wasteController');

// router.post('/', (req, res) => {
//     const wasteItem = req.body;
//     res.status(201).json({message: "Waste item added successfully"});
// });

router
.route('/')
.get(wasteController.wasteItems);

module.exports = router;