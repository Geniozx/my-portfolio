const express = require("express");

const {
  getPublishedProjects,
  getPublishedProjectBySlug
} = require("../controllers/projectController");

const router = express.Router();

router.get("/", getPublishedProjects);
router.get("/:slug", getPublishedProjectBySlug);

module.exports = router;