const pool = require("../db/pool");

const {
  uploadProjectImage,
  deleteProjectImage,
} = require("../services/cloudinaryService");

async function createProjectImage(req, res, next) {
  const { id: projectId } = req.params;
  const {
    alt_text = null,
    caption = null,
  } = req.body;

  const isCover =
    req.body.is_cover === true ||
    req.body.is_cover === "true";

  const displayOrder =
    req.body.display_order !== undefined
      ? Number(req.body.display_order)
      : 0;

  if (!req.file) {
    return res.status(400).json({
      error: "An image file is required.",  
    });    
  }  

  try {
    const projectResult = await pool.query(
      `
        SELECT id
        FROM projects
        WHERE id = $1
      `,
      [projectId]
    );

    if (!projectResult.rows[0]) {
      return res.status(404).json({
        error: "Project not found.",
      });
    }

    if (!Number.isInteger(displayOrder) || displayOrder < 0) {
      return res.status(400).json({
        error: "display_order must be a non-negative integer.",
      });
    }

    const uploadResult = await uploadProjectImage(req.file.buffer);

    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      if (isCover) {
        await client.query(
          `
            UPDATE project_images
            SET is_cover = FALSE
            WHERE project_id = $1
            AND is_cover = TRUE
          `,
          [projectId]
        );
      }

      const result = await client.query(
        `
          INSERT INTO project_images (
            project_id,
            image_url,
            public_id,
            alt_text,
            caption,
            is_cover,
            display_order
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING
            id,
            project_id,
            image_url,
            public_id,
            alt_text,
            caption,
            is_cover,
            display_order,
            created_at
        `,
        [
          projectId,
          uploadResult.secure_url,
          uploadResult.public_id,
          alt_text,
          caption,
          isCover,
          displayOrder,
        ]
      );

      await client.query("COMMIT");

      return res.status(201).json(result.rows[0]);
    } catch (databaseError) {
      await client.query("ROLLBACK");
      await deleteProjectImage(uploadResult.public_id);
      throw databaseError;
    } finally {
      client.release();
    }
  } catch (error) {
    next(error);
  }
}


async function updateProjectImage(req, res, next) {
  const { id: projectId, imageId } = req.params;

  const allowedFields = [
    "alt_text",
    "caption",
    "is_cover",
    "display_order",
  ];

  const updates = Object.entries(req.body).filter(([key]) =>
    allowedFields.includes(key)
  );

  if (updates.length === 0) {
    return res.status(400).json({
      error: "At least one valid field is required.",
    });
  }

  const normalizedUpdates = updates.map(([key, value]) => {
    if (key === "is_cover") {
      return [
        key,
        value === true || value === "true",
      ];
    }

    if (key === "display_order") {
      return [key, Number(value)];
    }

    return [key, value];
  });

  const displayOrderUpdate = normalizedUpdates.find(
    ([key]) => key === "display_order"
  );

  if (
    displayOrderUpdate &&
    (!Number.isInteger(displayOrderUpdate[1]) ||
      displayOrderUpdate[1] < 0)
  ) {
    return res.status(400).json({
      error: "display_order must be a non-negative integer.",
    });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const imageResult = await client.query(
      `
        SELECT id
        FROM project_images
        WHERE id = $1
        AND project_id = $2
      `,
      [imageId, projectId]
    );

    if (!imageResult.rows[0]) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        error: "Project image not found.",
      });
    }

    const coverUpdate = normalizedUpdates.find(
      ([key]) => key === "is_cover"
    );

    if (coverUpdate?.[1] === true) {
      await client.query(
        `
          UPDATE project_images
          SET is_cover = FALSE
          WHERE project_id = $1
          AND id <> $2
          AND is_cover = TRUE
        `,
        [projectId, imageId]
      );
    }

    const setClauses = normalizedUpdates.map(
      ([key], index) => `${key} = $${index + 1}`
    );

    const values = normalizedUpdates.map(([, value]) => value);

    values.push(imageId, projectId);

    const result = await client.query(
      `
        UPDATE project_images
        SET ${setClauses.join(", ")}
        WHERE id = $${values.length - 1}
        AND project_id = $${values.length}
        RETURNING
          id,
          project_id,
          image_url,
          public_id,
          alt_text,
          caption,
          is_cover,
          display_order,
          created_at
      `,
      values
    );

    await client.query("COMMIT");

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    await client.query("ROLLBACK");
    next(error);
  } finally {
    client.release();
  }
}

async function removeProjectImage(req, res, next) {
  const { id: projectId, imageId } = req.params;

  try {
    const imageResult = await pool.query(
      `
        SELECT
          id,
          project_id,
          public_id
        FROM project_images
        WHERE id = $1
        AND project_id = $2
      `,
      [imageId, projectId]
    );

    const image = imageResult.rows[0];

    if (!image) {
      return res.status(404).json({
        error: "Project image not found.",
      });
    }

    if (image.public_id) {
      await deleteProjectImage(image.public_id);
    }

    const result = await pool.query(
      `
        DELETE FROM project_images
        WHERE id = $1
        AND project_id = $2
        RETURNING
          id,
          project_id,
          image_url,
          public_id,
          alt_text,
          caption,
          is_cover,
          display_order,
          created_at
      `,
      [imageId, projectId]
    );

    return res.status(200).json({
      message: "Project image deleted successfully.",
      image: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProjectImage,
  updateProjectImage,
  removeProjectImage,
};