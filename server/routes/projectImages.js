const express = require("express");

const verifyToken = require("../middleware/verifyToken");

const upload = require("../middleware/upload");

const validateId = require("../middleware/validateId");

const {
  createProjectImage,
  updateProjectImage,
  removeProjectImage,
} = require("../controllers/projectImageController");

const router = express.Router({ mergeParams: true });

router.use(verifyToken);
router.use(validateId("id"));

router.post(
  "/",
  upload.single("image"),
  createProjectImage
);

router.patch(
  "/:imageId",
  validateId("imageId"),
  updateProjectImage
);

router.delete(
  "/:imageId",
  validateId("imageId"),
  removeProjectImage
);

module.exports = router;