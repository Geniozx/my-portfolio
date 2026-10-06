const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pool = require("../db/pool");

async function login(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Username and password are required.",
    });
  }

  try {
    const result = await pool.query(
      `
        SELECT id, username, email, password_hash
        FROM admins
        WHERE username = $1
      `,
      [username]
    );

    const admin = result.rows[0];

    if (!admin) {
      return res.status(401).json({
        error: "Invalid username or password.",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.password_hash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        error: "Invalid username or password.",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    next(error);
  }
}


async function getCurrentAdmin(req, res, next) {
  try {
    const result = await pool.query(
      `
        SELECT id, username, email, created_at, updated_at
        FROM admins
        WHERE id = $1
      `,
      [req.admin.id]
    );

    const admin = result.rows[0];

    if (!admin) {
      return res.status(404).json({
        error: "Admin not found.",
      });
    }

    return res.status(200).json({
      admin,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  getCurrentAdmin,
};