const express = require("express");

const verifyToken = require("../middleware/verifyToken");

const {
  getAllContactMessages,
  getContactMessageById,
  updateContactMessage,
  deleteContactMessage,
} = require("../controllers/contactMessageController");

const router = express.Router();

router.use(verifyToken);

router.get("/", getAllContactMessages);
router.get("/:id", getContactMessageById);
router.patch("/:id", updateContactMessage);
router.delete("/:id", deleteContactMessage);

module.exports = router;