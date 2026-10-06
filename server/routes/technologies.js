const express = require("express");

const {
  getAllTechnologies,
} = require("../controllers/technologyController");

const router = express.Router();

router.get("/", getAllTechnologies);

module.exports = router;