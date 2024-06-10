const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const clientRoute = require("./routes/clientRoute");
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/calculadora", cors(corsOptions), clientRoute);

module.exports = app;
