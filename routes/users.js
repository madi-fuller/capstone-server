const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController.js");

router
    .route("/")
    .post(userController.addUser);
router
    .route("/:id")
    .get(userController.userProfile);

module.exports = router;