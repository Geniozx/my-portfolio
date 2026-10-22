const express = require("express");

const { contactLimiter } = require("../middleware/rateLimiters");

const {
  createContactMessage,
} = require("../controllers/contactMessageController");

const router = express.Router();

router.post("/", contactLimiter, createContactMessage);

module.exports = router;
