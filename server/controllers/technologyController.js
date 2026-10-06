const pool = require("../db/pool");

async function getAllTechnologies(req, res, next) {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        category,
        icon_url,
        display_order,
        created_at
      FROM technologies
      ORDER BY display_order ASC, name ASC
    `);

    return res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
}


async function createTechnology(req, res, next) {
  const {
    name,
    category,
    icon_url = null,
    display_order = 0,
  } = req.body;

  if (!name || !category) {
    return res.status(400).json({
      error: "Name and category are required.",
    });
  }

  try {
    const result = await pool.query(
      `
        INSERT INTO technologies (
          name,
          category,
          icon_url,
          display_order
        )
        VALUES ($1, $2, $3, $4)
        RETURNING
          id,
          name,
          category,
          icon_url,
          display_order,
          created_at
      `,
      [name, category, icon_url, display_order]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        error: "A technology with that name already exists.",
      });
    }

    next(error);
  }
}

async function updateTechnology(req, res, next) {
  const { id } = req.params;

  const {
    name,
    category,
    icon_url,
    display_order,
  } = req.body;

  if (
    name === undefined &&
    category === undefined &&
    icon_url === undefined &&
    display_order === undefined
  ) {
    return res.status(400).json({
      error: "At least one field is required.",
    });
  }

  try {
    const result = await pool.query(
      `
        UPDATE technologies
        SET
          name = COALESCE($1, name),
          category = COALESCE($2, category),
          icon_url = COALESCE($3, icon_url),
          display_order = COALESCE($4, display_order)
        WHERE id = $5
        RETURNING
          id,
          name,
          category,
          icon_url,
          display_order,
          created_at
      `,
      [name, category, icon_url, display_order, id]
    );

    const technology = result.rows[0];

    if (!technology) {
      return res.status(404).json({
        error: "Technology not found.",
      });
    }

    return res.status(200).json(technology);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        error: "A technology with that name already exists.",
      });
    }

    next(error);
  }
}


async function deleteTechnology(req, res, next) {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
        DELETE FROM technologies
        WHERE id = $1
        RETURNING
          id,
          name,
          category,
          icon_url,
          display_order,
          created_at
      `,
      [id]
    );

    const technology = result.rows[0];

    if (!technology) {
      return res.status(404).json({
        error: "Technology not found.",
      });
    }

    return res.status(200).json({
      message: "Technology deleted successfully.",
      technology,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllTechnologies,
  createTechnology,
  updateTechnology,
  deleteTechnology,
};