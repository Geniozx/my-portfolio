const pool = require("../db/pool");

async function getHealth(req, res, next) {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({
      status: "ok",
      api: "online",
      database: "connected",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getHealth,
};