const express = require("express");

const {
  getAllTechnologies,
  createTechnology,
  updateTechnology,
  deleteTechnology,
} = require("../controllers/technologyController");

const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.use(verifyToken);

router.get("/", getAllTechnologies);
router.post("/", createTechnology);
router.patch("/:id", updateTechnology);
router.delete("/:id", deleteTechnology);

module.exports = router;