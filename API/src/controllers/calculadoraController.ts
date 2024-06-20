import { Request, Response } from "express";
import { modelosA } from "../mock/autoClaveModels/modelos_A";
import { modelosB } from "../mock/autoClaveModels/modelos_B";
import { modelosC } from "../mock/autoClaveModels/modelos_C";
import { modelosD } from "../mock/autoClaveModels/modelos_D";
import { modelosE } from "../mock/autoClaveModels/modelos_E";
import { modelosF } from "../mock/autoClaveModels/modelos_F";

import { calculadoraDados } from "../utils/calculadoraDados";
import { calcularModelos } from "../utils/calcularModelos";

export const calcularDados = async (req: Request, res: Response) => {
  // Uni todos os modelos de todas as marcas
  const todosModelos = [
    ...modelosA,
    ...modelosB,
    ...modelosC,
    ...modelosD,
    ...modelosE,
    ...modelosF,
  ];

  const inputsCalculadora = req.body;

  // Calcula o Volume Diário de Material em Litros usando os inputs passados pelo usuario
  const resultado = calculadoraDados(inputsCalculadora);

  // Faz o calculo do percentual de todos os modelos de todas as marcas
  const todosResultadosDosModelos = await Promise.all(
    todosModelos.map(async (modelo) => {
      const inputsCalcularModelos = {
        VolumeDiarioDeMaterialLitros: resultado,
        IntervaloDePicoCME: inputsCalculadora.IntervaloDePicoCME,
        modelos: [modelo],
      };

      const resultadoDeCadaModelo = await calcularModelos(
        inputsCalcularModelos
      );

      console.log(resultadoDeCadaModelo);

      return resultadoDeCadaModelo;
    })
  );

  const todosResultados: any = [];
  todosResultadosDosModelos.forEach((item: any) => {
    item.forEach((subItem: any) => {
      if (subItem) {
        todosResultados.push(subItem);
      }
    });
  });

  const resultadosModelosA = todosResultados
    .filter(
      (item: any) =>
        item.NomeModelo.includes("A") && item.PercentualFormatado < 90
    )
    .sort((a: any, b: any) => b.PercentualFormatado - a.PercentualFormatado);

  res.status(200).json([resultadosModelosA[0], resultadosModelosA[1]]);
};
