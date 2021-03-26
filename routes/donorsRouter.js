const express = require("express");
const donorsController = require("../controllers/donorsController");
const router = express.Router();

router
    .get("/", donorsController.donorsIndex)
    .get("/get", donorsController.donorsGet)
    .post("/add", donorsController.donorsAddPost)
    .get("/add", donorsController.donorsAdd)
    .put("/edit", donorsController.donorsPut)
    .delete("/remove", donorsController.donorsDelete)
    .get("/search", donorsController.donorsSearch)
    .post("/search", donorsController.donorsSearchPost)

module.exports = router;