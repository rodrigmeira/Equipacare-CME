import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { reqInterface } from "../interfaces";
import * as calculos from "../utils";

const prisma = new PrismaClient();

// Pega todos os modelos de autoclaves ao rodar o projeto
let autoclaves: any[] = [];

const getAllAutoclaves = async () => {
  autoclaves = [];

  let response = await prisma.autoclaves.findMany();

  autoclaves.push(response);

  console.log(
    "*** autoclaves obtidas com sucesso",
    ...autoclaves,
    autoclaves.flat().length
  );
};

getAllAutoclaves();

// Pega todos os modelos de lavadoras termo ao rodar o projeto
let lavadoras: any[] = [];

const getAllLavadoras = async () => {
  lavadoras = [];

  let response = await prisma.lavadorasTermo.findMany();

  lavadoras.push(response);

  console.log(
    "*** lavadoras obtidas com sucesso",
    ...lavadoras,
    lavadoras.flat().length
  );
};

getAllLavadoras();

export const calcular = async (req: Request, res: Response) => {
  try {
    //Recebe os inputs do usuario
    const {
      numeroSalasCirurgicas,
      numeroCirurgiasSalaDia,
      intervaloDePicoCME,
      numeroLeitosUTI,
      numeroLeitosInternacao,
    }: reqInterface = req.body;

    // Calcula o Volume Diário de Material em Litros usando os inputs passados pelo usuario
    const volumeDiario = calculos.calcularDados({
      numeroSalasCirurgicas,
      numeroCirurgiasSalaDia,
      intervaloDePicoCME,
      numeroLeitosUTI,
      numeroLeitosInternacao,
    });

    // ----- CALCULO AUTOCLAVES -----

    // Uni todos os modelos das Autoclaves
    const todosModelosAutoclaves = autoclaves.flat();

    // Acha a quantidade minima de autoclaves e ja traz os dois melhores modelos de cada marca
    let resultadosAutoclaves;
    let numeroDeAutoclaves = 2;

    while (true) {
      resultadosAutoclaves = await calculos.calcularResultadosAutoclaves(
        todosModelosAutoclaves,
        intervaloDePicoCME,
        volumeDiario.estimativaDeVolumeTotalDiarioLitros,
        numeroDeAutoclaves
      );

      if (resultadosAutoclaves.flat().length === 13) {
        break;
      }
      numeroDeAutoclaves++;
    }

    // ----- CALCULO LAVADORAS TERMO -----

    const todosModelosLavadoras = lavadoras.flat();

    let resultadoLavadoras;
    let numeroDeLavadoras: number = 1;

    while (true) {
      resultadoLavadoras = await calculos.calcularLavadoras(
        volumeDiario.estimativaVolumeTotalDiarioPorMaterial,
        volumeDiario.numeroDeCirurgiasPorDia,
        numeroLeitosUTI,
        numeroDeLavadoras,
        todosModelosLavadoras
      );

      if (
        resultadoLavadoras.resultadoFinal.length > 5 &&
        resultadoLavadoras.resultadoFinal.length < 12
      ) {
        break;
      }

      numeroDeLavadoras++;
    }

    getAllAutoclaves();

    return res.status(200).json([resultadosAutoclaves, resultadoLavadoras]);
  } catch (error) {
    console.error(
      "Ocorreu um erro ao tentar realizar o calculo. Tente novamente mais tarde."
    );
    res.status(500).send(error);
  }
};
