const pool = require("../db/pool");

async function createContactMessage(req, res, next) {
    const {
        name,
        email,
        subject = null,
        message,
    } = req.body;

    const trimmedName =
        typeof name === "string" ? name.trim() : "";

    const trimmedEmail =
        typeof email === "string" ? email.trim() : "";

    const trimmedSubject =
        typeof subject === "string" ? subject.trim() : null;

    const trimmedMessage =
        typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
        return res.status(400).json({
            error: "Name, email, and message are required.",
        });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
        return res.status(400).json({
            error: "Please provide a valid email address.",
        });
    }

    if (trimmedName.length > 100) {
        return res.status(400).json({
            error: "Name must be 100 characters or fewer.",
        });
    }

    if (trimmedEmail.length > 255) {
        return res.status(400).json({
            error: "Email must be 255 characters or fewer.",
        });
    }

    if (trimmedSubject && trimmedSubject.length > 200) {
        return res.status(400).json({
            error: "Subject must be 200 characters or fewer.",
        });
    }

  try {
    const result = await pool.query(
      `
        INSERT INTO contact_messages (
            name,
            email,
            subject,
            message
        )
        VALUES ($1, $2, $3, $4)
        RETURNING
            id,
            name,
            email,
            subject,
            message,
            is_read,
            created_at
      `,
        [
            trimmedName,
            trimmedEmail,
            trimmedSubject || null,
            trimmedMessage,
        ]
    );

    return res.status(201).json({
        message: "Message sent successfully.",
        contact_message: result.rows[0],
    });
    }   catch (error) {
            next(error);
    }
}

async function getAllContactMessages(req, res, next) {
  try {
    const result = await pool.query(
      `
        SELECT
          id,
          name,
          email,
          subject,
          message,
          is_read,
          created_at
        FROM contact_messages
        ORDER BY created_at DESC
      `
    );

    return res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
}

async function getContactMessageById(req, res, next) {
  const messageId = Number(req.params.id);

  if (!Number.isInteger(messageId) || messageId <= 0) {
    return res.status(400).json({
      error: "Invalid contact message ID.",
    });
  }

  try {
    const result = await pool.query(
      `
        SELECT
          id,
          name,
          email,
          subject,
          message,
          is_read,
          created_at
        FROM contact_messages
        WHERE id = $1
      `,
      [messageId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Contact message not found.",
      });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

async function updateContactMessage(req, res, next) {
  const messageId = Number(req.params.id);
  const { is_read } = req.body;

  if (!Number.isInteger(messageId) || messageId <= 0) {
    return res.status(400).json({
      error: "Invalid contact message ID.",
    });
  }

  if (typeof is_read !== "boolean") {
    return res.status(400).json({
      error: "is_read must be a boolean.",
    });
  }

  try {
    const result = await pool.query(
      `
        UPDATE contact_messages
        SET is_read = $1
        WHERE id = $2
        RETURNING
          id,
          name,
          email,
          subject,
          message,
          is_read,
          created_at
      `,
      [is_read, messageId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Contact message not found.",
      });
    }

    return res.status(200).json({
      message: "Contact message updated successfully.",
      contact_message: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
}

async function deleteContactMessage(req, res, next) {
  const messageId = Number(req.params.id);

  if (!Number.isInteger(messageId) || messageId <= 0) {
    return res.status(400).json({
      error: "Invalid contact message ID.",
    });
  }

  try {
    const result = await pool.query(
      `
        DELETE FROM contact_messages
        WHERE id = $1
        RETURNING
          id,
          name,
          email,
          subject,
          message,
          is_read,
          created_at
      `,
      [messageId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Contact message not found.",
      });
    }

    return res.status(200).json({
      message: "Contact message deleted successfully.",
      contact_message: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
    createContactMessage,
    getAllContactMessages,
    getContactMessageById,
    updateContactMessage,
    deleteContactMessage,
};
