const express = require("express");

const {
  login,
  getCurrentAdmin,
} = require("../controllers/authController");

const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/login", login);
router.get("/me", verifyToken, getCurrentAdmin);

module.exports = router;