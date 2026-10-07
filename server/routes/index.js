const express = require("express");

const authRouter = require("./auth");
const healthRouter = require("./health");
const contactRouter = require("./contact");
const technologiesRouter = require("./technologies");
const adminTechnologiesRouter = require("./adminTechnologies");
const projectsRouter = require("./projects");
const adminProjectsRouter = require("./adminProjects");
const adminMessagesRouter = require("./adminMessages");
const projectImagesRouter = require("./projectImages");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Developer Portfolio API",
  });
});

router.use("/auth", authRouter);
router.use("/health", healthRouter);
router.use("/contact", contactRouter);
router.use("/technologies", technologiesRouter);
router.use("/admin/technologies", adminTechnologiesRouter);
router.use("/projects", projectsRouter);
router.use("/admin/projects", adminProjectsRouter);
router.use("/admin/messages", adminMessagesRouter);

router.use(
  "/admin/projects/:id/images",
  projectImagesRouter
);

module.exports = router;
