const express = require("express");

const { loginLimiter } = require("../middleware/rateLimiters");

const {
  login,
  getCurrentAdmin,
} = require("../controllers/authController");

const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/login", loginLimiter, login);
router.get("/me", verifyToken, getCurrentAdmin);

module.exports = router;