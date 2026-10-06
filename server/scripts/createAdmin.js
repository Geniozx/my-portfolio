require("dotenv").config();

const bcrypt = require("bcrypt");
const readline = require("readline");
const pool = require("../db/pool");

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function createAdmin() {
  const username = process.argv[2];
  const email = process.argv[3];

  if (!username || !email) {
    console.error(
      "Usage: node scripts/createAdmin.js <username> <email>"
    );

    await pool.end();
    process.exit(1);
  }

  try {
    const existingAdmin = await pool.query(
      `
        SELECT id
        FROM admins
        WHERE username = $1 OR email = $2
      `,
      [username, email]
    );

    if (existingAdmin.rows.length > 0) {
      console.error("An admin with that username or email already exists.");
      return;
    }

    const password = await askQuestion("Enter admin password: ");

    if (!password || password.length < 8) {
      console.error("Password must be at least 8 characters.");
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `
        INSERT INTO admins (username, email, password_hash)
        VALUES ($1, $2, $3)
        RETURNING id, username, email, created_at
      `,
      [username, email, passwordHash]
    );

    console.log("Admin created successfully:");
    console.log(result.rows[0]);
  } catch (error) {
    console.error("Unable to create admin:", error.message);
  } finally {
    await pool.end();
  }
}

createAdmin();