function validateId(paramName = "id") {
  return function validateIdParam(req, res, next) {
    const value = req.params[paramName];
    const id = Number(value);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: `${paramName} must be a valid positive integer.`,
      });
    }

    req.params[paramName] = String(id);

    next();
  };
}

module.exports = validateId;