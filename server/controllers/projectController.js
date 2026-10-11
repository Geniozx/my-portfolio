const pool = require("../db/pool");

const {
  deleteProjectImage,
} = require("../services/cloudinaryService");

async function getPublishedProjects(req, res, next) {
  try {
    const result = await pool.query(`
      SELECT
        id,
        title,
        slug,
        short_description,
        description,
        problem,
        solution,
        features,
        challenges,
        lessons_learned,
        project_type,
        status,
        github_url,
        live_url,
        featured,
        display_order,
        created_at,
        updated_at,
        (
          SELECT json_build_object(
            'id', pi.id,
            'image_url', pi.image_url,
            'alt_text', pi.alt_text,
            'caption', pi.caption
          )
          FROM project_images pi
          WHERE pi.project_id = projects.id
            AND pi.is_cover = TRUE
          LIMIT 1
        ) AS cover_image,
        COALESCE(
          (
            SELECT json_agg(
              json_build_object(
                'id', t.id,
                'name', t.name,
                'category', t.category,
                'icon_url', t.icon_url,
                'display_order', t.display_order
              )
              ORDER BY t.display_order ASC, t.name ASC
            )
            FROM project_technologies pt
            JOIN technologies t
              ON t.id = pt.technology_id
            WHERE pt.project_id = projects.id
          ),
          '[]'::json
        ) AS technologies
      FROM projects
      WHERE published = TRUE
      ORDER BY display_order ASC, created_at DESC
    `);

    return res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
}

async function getPublishedProjectBySlug(req, res, next) {
  const { slug } = req.params;

  try {
    const result = await pool.query(
      `
        SELECT
          id,
          title,
          slug,
          short_description,
          description,
          problem,
          solution,
          features,
          challenges,
          lessons_learned,
          project_type,
          status,
          github_url,
          live_url,
          featured,
          display_order,
          created_at,
          updated_at
        FROM projects
        WHERE slug = $1
          AND published = TRUE
      `,
      [slug]
    );

    const project = result.rows[0];

    if (!project) {
      return res.status(404).json({
        error: "Project not found.",
      });
    }

    const imageResult = await pool.query(
      `
        SELECT
          id,
          image_url,
          alt_text,
          caption,
          is_cover,
          display_order
        FROM project_images
        WHERE project_id = $1
        ORDER BY
          is_cover DESC,
          display_order ASC,
          id ASC
      `,
      [project.id]
    );

    const technologyResult = await pool.query(
      `
        SELECT
          t.id,
          t.name,
          t.category,
          t.icon_url,
          t.display_order
        FROM project_technologies pt
        JOIN technologies t
          ON t.id = pt.technology_id
        WHERE pt.project_id = $1
        ORDER BY
          t.display_order ASC,
          t.name ASC
      `,
      [project.id]
    );

    project.images = imageResult.rows;
    project.technologies = technologyResult.rows;

    return res.status(200).json(project);
  } catch (error) {
    next(error);
  }
}


async function getAllProjects(req, res, next) {
  try {
    const result = await pool.query(`
      SELECT
        id,
        title,
        slug,
        short_description,
        description,
        problem,
        solution,
        features,
        challenges,
        lessons_learned,
        project_type,
        status,
        github_url,
        live_url,
        featured,
        published,
        display_order,
        created_at,
        updated_at
      FROM projects
      ORDER BY display_order ASC, created_at DESC
    `);

    return res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
}

async function getProjectById(req, res, next) {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
        SELECT
          id,
          title,
          slug,
          short_description,
          description,
          problem,
          solution,
          features,
          challenges,
          lessons_learned,
          project_type,
          status,
          github_url,
          live_url,
          featured,
          published,
          display_order,
          created_at,
          updated_at
        FROM projects
        WHERE id = $1
      `,
      [id]
    );

    const project = result.rows[0];

    if (!project) {
      return res.status(404).json({
        error: "Project not found.",
      });
    }

    const imageResult = await pool.query(
      `
        SELECT
          id,
          image_url,
          public_id,
          alt_text,
          caption,
          is_cover,
          display_order,
          created_at
        FROM project_images
        WHERE project_id = $1
        ORDER BY
          is_cover DESC,
          display_order ASC,
          id ASC
      `,
      [project.id]
    );

    const technologyResult = await pool.query(
      `
        SELECT
          t.id,
          t.name,
          t.category,
          t.icon_url,
          t.display_order
        FROM project_technologies pt
        JOIN technologies t
          ON t.id = pt.technology_id
        WHERE pt.project_id = $1
        ORDER BY
          t.display_order ASC,
          t.name ASC
      `,
      [project.id]
    );

    project.images = imageResult.rows;
    project.technologies = technologyResult.rows;

    return res.status(200).json(project);
  } catch (error) {
    next(error);
  }
}

async function createProject(req, res, next) {
    const {
        title,
        slug,
        short_description,
        description = null,
        problem = null,
        solution = null,
        features = null,
        challenges = null,
        lessons_learned = null,
        project_type = null,
        status = null,
        github_url = null,
        live_url = null,
        featured = false,
        published = false,
        display_order = 0,
    } = req.body;

    if (!title || !slug || !short_description) {
        return res.status(400).json({
            error: "Title, slug, and short description are required.",
        });
    }

  try {
    const result = await pool.query(
      `
        INSERT INTO projects (
          title,
          slug,
          short_description,
          description,
          problem,
          solution,
          features,
          challenges,
          lessons_learned,
          project_type,
          status,
          github_url,
          live_url,
          featured,
          published,
          display_order
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14, $15, $16
        )
        RETURNING
          id,
          title,
          slug,
          short_description,
          description,
          problem,
          solution,
          features,
          challenges,
          lessons_learned,
          project_type,
          status,
          github_url,
          live_url,
          featured,
          published,
          display_order,
          created_at,
          updated_at
      `,
      [
        title,
        slug,
        short_description,
        description,
        problem,
        solution,
        features,
        challenges,
        lessons_learned,
        project_type,
        status,
        github_url,
        live_url,
        featured,
        published,
        display_order,
      ]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        error: "A project with that slug already exists.",
      });
    }

    next(error);
  }
}


async function updateProject(req, res, next) {
  const { id } = req.params;

  const allowedFields = [
    "title",
    "slug",
    "short_description",
    "description",
    "problem",
    "solution",
    "features",
    "challenges",
    "lessons_learned",
    "project_type",
    "status",
    "github_url",
    "live_url",
    "featured",
    "published",
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

  const setClauses = updates.map(
    ([key], index) => `${key} = $${index + 1}`
  );

  const values = updates.map(([, value]) => value);

  setClauses.push("updated_at = CURRENT_TIMESTAMP");

  values.push(id);

  try {
    const result = await pool.query(
      `
        UPDATE projects
        SET ${setClauses.join(", ")}
        WHERE id = $${values.length}
        RETURNING
          id,
          title,
          slug,
          short_description,
          description,
          problem,
          solution,
          features,
          challenges,
          lessons_learned,
          project_type,
          status,
          github_url,
          live_url,
          featured,
          published,
          display_order,
          created_at,
          updated_at
      `,
      values
    );

    const project = result.rows[0];

    if (!project) {
      return res.status(404).json({
        error: "Project not found.",
      });
    }

    return res.status(200).json(project);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        error: "A project with that slug already exists.",
      });
    }

    next(error);
  }
}


async function deleteProject(req, res, next) {
  const { id } = req.params;

  try {
    const projectResult = await pool.query(
      `
        SELECT
          id,
          title,
          slug
        FROM projects
        WHERE id = $1
      `,
      [id]
    );

    const project = projectResult.rows[0];

    if (!project) {
      return res.status(404).json({
        error: "Project not found.",
      });
    }

    const imageResult = await pool.query(
      `
        SELECT public_id
        FROM project_images
        WHERE project_id = $1
        AND public_id IS NOT NULL
      `,
      [id]
    );

    for (const image of imageResult.rows) {
      await deleteProjectImage(image.public_id);
    }

    await pool.query(
      `
        DELETE FROM projects
        WHERE id = $1
      `,
      [id]
    );

    return res.status(200).json({
      message: "Project deleted successfully.",
      project,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProjectTechnologies(req, res, next) {
  const { id } = req.params;
  const { technology_ids } = req.body;

  if (!Array.isArray(technology_ids)) {
    return res.status(400).json({
      error: "technology_ids must be an array.",
    });
  }

  const uniqueTechnologyIds = [...new Set(technology_ids)];

  if (
    uniqueTechnologyIds.some(
      (technologyId) =>
        !Number.isInteger(technologyId) || technologyId <= 0
    )
  ) {
    return res.status(400).json({
      error: "technology_ids must contain valid positive integer IDs.",
    });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const projectResult = await client.query(
      `
        SELECT id
        FROM projects
        WHERE id = $1
      `,
      [id]
    );

    if (!projectResult.rows[0]) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        error: "Project not found.",
      });
    }

    if (uniqueTechnologyIds.length > 0) {
      const technologyResult = await client.query(
        `
          SELECT id
          FROM technologies
          WHERE id = ANY($1::int[])
        `,
        [uniqueTechnologyIds]
      );

      if (technologyResult.rows.length !== uniqueTechnologyIds.length) {
        await client.query("ROLLBACK");

        return res.status(400).json({
          error: "One or more technology IDs are invalid.",
        });
      }
    }

    await client.query(
      `
        DELETE FROM project_technologies
        WHERE project_id = $1
      `,
      [id]
    );

    for (const technologyId of uniqueTechnologyIds) {
      await client.query(
        `
          INSERT INTO project_technologies (
            project_id,
            technology_id
          )
          VALUES ($1, $2)
        `,
        [id, technologyId]
      );
    }

    const result = await client.query(
      `
        SELECT
          t.id,
          t.name,
          t.category,
          t.icon_url,
          t.display_order
        FROM technologies t
        JOIN project_technologies pt
          ON pt.technology_id = t.id
        WHERE pt.project_id = $1
        ORDER BY t.display_order ASC, t.name ASC
      `,
      [id]
    );

    await client.query("COMMIT");

    return res.status(200).json({
      project_id: Number(id),
      technologies: result.rows,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    next(error);
  } finally {
    client.release();
  }
}

module.exports = {
  getPublishedProjects,
  getPublishedProjectBySlug,
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
};