const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const apiRouter = require("./routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", apiRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
