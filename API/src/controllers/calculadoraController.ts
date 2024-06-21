import { Request, Response } from "express";
import {
  modelosA,
  modelosB,
  modelosC,
  modelosD,
  modelosE,
  modelosF,
} from "../mock";
import { calcularDados } from "../utils/calcularDados";
import { calcularResultadosAutoclaves } from "../utils/calcularResultadosAutoclaves";
import { obterResultadosPorMarcaAutoclaves } from "../utils/obterResultadosPorMarcasAutoclaves";

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

  // Uni todos os modelos
  const todosModelosAutoclaves = obterTodosModelosAutoclaves();

  // Calcula o Volume Diário de Material em Litros usando os inputs passados pelo usuario
  const volumeDiario = calcularDados(inputsCalculadora);

  // Calcula o percentual de cada modelo
  const todosResultados = await calcularResultadosAutoclaves(
    todosModelosAutoclaves,
    inputsCalculadora,
    volumeDiario
  );

  // Pega os dois resultados abaixo e mais proximos de 90%
  const resultadoTodasMarcasAutoclaves = obterResultadosPorMarcaAutoclaves(
    todosResultados,
    ["A", "B", "C", "D", "E", "F"]
  );

  res.status(200).json(resultadoTodasMarcasAutoclaves);
};
