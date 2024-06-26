import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import express from "express";
import { calcular } from "../controllers/calculadoraController";
const router = express.Router();

dotenv.config();

const prisma = new PrismaClient();

router.post("/calcular-dados", calcular);
// router.get("/autoclaves", getAllAutoclaves);

export default router;
