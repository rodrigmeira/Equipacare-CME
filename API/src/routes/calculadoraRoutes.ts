import express from "express";
import { calcular } from "../controllers/calculadoraController";
const router = express.Router();

// router.get("/calcular", calculadoraController.calcular);
router.post("/calcular-dados", calcular);

export default router;
