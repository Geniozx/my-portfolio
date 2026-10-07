const express = require("express");

const {
  createContactMessage,
} = require("../controllers/contactMessageController");

const router = express.Router();

router.post("/", createContactMessage);

module.exports = router;
