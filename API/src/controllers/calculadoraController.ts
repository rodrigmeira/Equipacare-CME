import { Request, Response } from "express";
import { modelosA } from "../mock/modelos_A";
import { modelosB } from "../mock/modelos_B";
import { modelosC } from "../mock/modelos_C";
import { modelosD } from "../mock/modelos_D";
import { modelosE } from "../mock/modelos_E";
import { modelosF } from "../mock/modelos_F";

import { calculadoraDados } from "../utils/calculadoraDados";
import { calcularModelos } from "../utils/calcularModelos";

export const calcularDados = (req: Request, res: Response) => {
  const todosModelos = [
    ...modelosA,
    ...modelosB,
    ...modelosC,
    ...modelosD,
    ...modelosE,
    ...modelosF,
  ];

  const inputsCalculadora = req.body;

  const resultado = calculadoraDados(inputsCalculadora);

  const todosResultadosDosModelos = todosModelos.map((modelo) => {
    const inputsCalcularModelos = {
      VolumeDiarioDeMaterialLitros: resultado,
      IntervaloDePicoCME: inputsCalculadora.IntervaloDePicoCME,
      modelos: [modelo],
    };

    const resultadoDeCadaModelo = calcularModelos(inputsCalcularModelos);
    return resultadoDeCadaModelo;
  });

  res.status(200).json(todosResultadosDosModelos);
};
