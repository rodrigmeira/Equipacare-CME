import { Request, Response } from "express";
import {
  modelosA,
  modelosB,
  modelosC,
  modelosD,
  modelosE,
  modelosF,
} from "../mock";
import {
  calcularDados,
  calcularResultadosAutoclaves,
  obterResultadosPorMarcasAutoclaves,
} from "../utils";

const obterTodosModelosAutoclaves = () => {
  return [
    ...modelosA,
    ...modelosB,
    ...modelosC,
    ...modelosD,
    ...modelosE,
    ...modelosF,
  ];
};

export const calcular = async (req: Request, res: Response) => {
  //Recebe os inputs do usuario
  const inputsCalculadora = req.body;

  // Calcula o Volume Diário de Material em Litros usando os inputs passados pelo usuario
  const volumeDiario = calcularDados(inputsCalculadora);

  // ----- CALCULO AUTOCLAVES -----

  // Uni todos os modelos das Autoclaves
  const todosModelosAutoclaves = obterTodosModelosAutoclaves();

  // Calcula o percentual de cada modelo das Autoclaves
  const todosResultados = await calcularResultadosAutoclaves(
    todosModelosAutoclaves,
    inputsCalculadora,
    volumeDiario
  );

  // Pega os dois resultados abaixo e mais proximos de 90% das Autoclaves
  const resultadoTodasMarcasAutoclaves = obterResultadosPorMarcasAutoclaves(
    todosResultados,
    ["A", "B", "C", "D", "E", "F"]
  );

  // ----- CALCULO LAVADORAS TERMO -----

  res.status(200).json(resultadoTodasMarcasAutoclaves);
};
