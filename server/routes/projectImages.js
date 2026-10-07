const express = require("express");

const verifyToken = require("../middleware/verifyToken");
const upload = require("../middleware/upload");
const {
  createProjectImage,
  updateProjectImage,
  removeProjectImage,
} = require("../controllers/projectImageController");

const router = express.Router({ mergeParams: true });

router.use(verifyToken);

router.post(
  "/",
  upload.single("image"),
  createProjectImage
);

router.patch(
  "/:imageId",
  updateProjectImage
);

router.delete(
  "/:imageId",
  removeProjectImage
);

module.exports = router;