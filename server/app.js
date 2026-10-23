const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const helmet = require("helmet");

const apiRouter = require("./routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.disable("x-powered-by");

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

app.use(helmet());

const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      const error = new Error("Origin not allowed.");
      error.statusCode = 403;

      return callback(error);
    },
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", apiRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
