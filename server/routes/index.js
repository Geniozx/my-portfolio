const express = require("express");

const healthRouter = require("./health");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Developer Portfolio API",
  });
});


router.use("/health", healthRouter);

module.exports = router;