const express = require("express");

const validateId = require("../middleware/validateId");

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
router.patch("/:id", validateId(), updateTechnology);
router.delete("/:id", validateId(), deleteTechnology);

module.exports = router;
