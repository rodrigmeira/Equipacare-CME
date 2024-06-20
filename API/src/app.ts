import bodyParser from "body-parser";
import express from "express";
import calculadoraRoutes from "./routes/calculadoraRoutes";
const app = express();
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/calculadora", cors(corsOptions), calculadoraRoutes);

export default app;
