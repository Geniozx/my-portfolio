const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const apiRouter = require("./routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

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

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", apiRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
