const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const clientRoute = require("./routes/clientRoute");
const cors = require("cors");

//css swagger
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = { customCssUrl: "/swagger-ui.css" };

//swagger doc
const  swaggerFile = require("../swagger/swagger_output.json");

//rotas swagger
app.get("/", (_, res)=>{/* #swagger.ignore = true */ res.redirect("/doc")} )
app.use( "/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions));

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/calculadora", cors(corsOptions), clientRoute);

module.exports = app;
