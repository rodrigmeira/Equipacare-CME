import { Request, Response } from "express";
import { modelosA } from "../mock/modelos_A";
import { modelosB } from "../mock/modelos_B";
import { modelosC } from "../mock/modelos_C";
import { modelosD } from "../mock/modelos_D";
import { modelosE } from "../mock/modelos_E";
import { modelosF } from "../mock/modelos_F";

import { calculadoraDados } from "../utils/calculadoraDados";
import { calcularModelos } from "../utils/calcularModelos";

export const calcularDados = async (req: Request, res: Response) => {
  // Uni todos os modelos de todas as marcas
  const todosModelos = await [
    ...modelosA,
    ...modelosB,
    ...modelosC,
    ...modelosD,
    ...modelosE,
    ...modelosF,
  ];

  const inputsCalculadora = req.body;

  // Calcula o Volume Diário de Material em Litros usando os inputs passados pelo usuario
  const resultado = await calculadoraDados(inputsCalculadora);

  // Faz o calculo do percentual de todos os modelos de todas as marcas
  const todosResultadosDosModelos = todosModelos.map((modelo) => {
    const inputsCalcularModelos = {
      VolumeDiarioDeMaterialLitros: resultado,
      IntervaloDePicoCME: inputsCalculadora.IntervaloDePicoCME,
      modelos: [modelo],
    };

    const resultadoDeCadaModelo = calcularModelos(inputsCalcularModelos);
    return resultadoDeCadaModelo;
  });

  // Faz a filtragem dos modelos da marca A
  const resultadosModelosA = await Promise.all(
    todosResultadosDosModelos.map(async (modelo, index) => {
      const modelosResolvidos = await modelo;
      const nomeDeCadaModelo = modelosResolvidos.filter((modelo) => {
        return modelo.NomeModelo === "A" + (index + 1);
      });

      return nomeDeCadaModelo;
    })
  );

  res.status(200).json(resultadosModelosA);
};
