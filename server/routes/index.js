const express = require("express");

const authRouter = require("./auth");
const healthRouter = require("./health");
const technologiesRouter = require("./technologies");
const adminTechnologiesRouter = require("./adminTechnologies");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Developer Portfolio API",
  });
});

router.use("/auth", authRouter);
router.use("/health", healthRouter);
router.use("/technologies", technologiesRouter);
router.use("/admin/technologies", adminTechnologiesRouter);

module.exports = router;