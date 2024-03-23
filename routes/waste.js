const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const wasteItem = req.body;
    res.status(201).json({message: "Waste item added successfully"});
});

module.exports = router;