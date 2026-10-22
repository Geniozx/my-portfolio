const express = require("express");

const validateId = require("../middleware/validateId");

const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} = require("../controllers/projectController");

const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.use(verifyToken);

router.get("/", getAllProjects);
router.get("/:id", validateId(), getProjectById);
router.post("/", createProject);
router.patch("/:id", validateId(), updateProject);
router.delete("/:id", validateId(), deleteProject);
router.put("/:id/technologies", validateId(), updateProjectTechnologies);

module.exports = router;
