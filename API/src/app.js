const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const clientRoute = require("./routes/clientRoute");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/calculadora", clientRoute);

module.exports = app;
