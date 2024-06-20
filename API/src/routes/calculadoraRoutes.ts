import express from "express";
import { calcularDados } from "../controllers/calculadoraController";
const router = express.Router();

// router.get("/calcular", calculadoraController.calcular);
router.post("/calcular-dados", calcularDados);

export default router;
