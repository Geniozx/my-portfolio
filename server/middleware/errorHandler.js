const multer = require("multer");

function errorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({
        error: "Image file must be 10 MB or smaller.",
      });
    }

    return res.status(400).json({
      error: err.message,
    });
  }

  if (err.message === "Only JPEG, PNG, and WebP images are allowed.") {
    return res.status(400).json({
      error: err.message,
    });
  }

  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    error: err.message || "Internal server error.",
  });
}

module.exports = errorHandler;