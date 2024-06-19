const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const calculadoraRoutes = require("./routes/calculadoraRoutes");
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/calculadora", cors(corsOptions), calculadoraRoutes);

module.exports = app;
