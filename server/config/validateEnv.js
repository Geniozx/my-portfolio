const requiredEnvVars = [
  "DATABASE_URL",
  "JWT_SECRET",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

function validateEnv() {
  const missingEnvVars = requiredEnvVars.filter(
    (name) => !process.env[name]?.trim()
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(", ")}`
    );
  }
}

module.exports = validateEnv;