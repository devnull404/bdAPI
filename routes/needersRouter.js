const express = require("express");
const router = express.Router();
const needersController = require("../controllers/needersController.js")

router
    .get("/", needersController.needersIndex)
    .get("/add", needersController.needersAdd)
    .post("/add", needersController.needersAddPost)
    .get("/search", needersController.needersSearch)

module.exports = router;