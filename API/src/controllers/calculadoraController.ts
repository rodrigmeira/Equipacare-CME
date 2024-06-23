import { Request, Response } from "express";
import { reqInterface } from "../interfaces";
import {
  modelosA,
  modelosB,
  modelosC,
  modelosD,
  modelosE,
  modelosF,
  modelosLavadorasA,
  modelosLavadorasB,
  modelosLavadorasC,
  modelosLavadorasD,
  modelosLavadorasE,
  modelosLavadorasF,
} from "../mock";
import {
  calcularDados,
  calcularLavadoras,
  calcularResultadosAutoclaves,
  obterResultadosFinais,
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

const obterTodosModelosLavadoras = () => {
  return [
    ...modelosLavadorasA,
    ...modelosLavadorasB,
    ...modelosLavadorasC,
    ...modelosLavadorasD,
    ...modelosLavadorasE,
    ...modelosLavadorasF,
  ];
};

export const calcular = async (req: Request, res: Response) => {
  //Recebe os inputs do usuario
  const {
    NumeroSalasCirurgicas,
    NumeroCirurgiasSalaDia,
    IntervaloDePicoCME,
    NumeroLeitosUTI,
    NumeroLeitosInternacao,
  }: reqInterface = req.body;

  // Calcula o Volume Diário de Material em Litros usando os inputs passados pelo usuario
  const volumeDiario = calcularDados({
    NumeroSalasCirurgicas,
    NumeroCirurgiasSalaDia,
    IntervaloDePicoCME,
    NumeroLeitosUTI,
    NumeroLeitosInternacao,
  });

  // ----- CALCULO AUTOCLAVES -----

  // Uni todos os modelos das Autoclaves
  const todosModelosAutoclaves = obterTodosModelosAutoclaves();

  // Acha a quantidade minima de autoclaves e ja traz os dois melhores modelos de cada marca
  let todosResultadosAutoclaves;
  let numeroDeAutoclaves = 2;

  while (true) {
    todosResultadosAutoclaves = await calcularResultadosAutoclaves(
      todosModelosAutoclaves,
      IntervaloDePicoCME,
      volumeDiario.EstimativaDeVolumeTotalDiarioLitros,
      numeroDeAutoclaves
    );

    if (todosResultadosAutoclaves.flat().length === 13) {
      break;
    }
    numeroDeAutoclaves++;
  }

  // ----- CALCULO LAVADORAS TERMO -----

  const todosModelosLavadoras = obterTodosModelosLavadoras();

  const resultadoLavadoras = await calcularLavadoras(
    volumeDiario.EstimativaVolumeTotalDiarioPorMaterial,
    volumeDiario.NumeroDeCirurgiasPorDia,
    NumeroLeitosUTI,
    2,
    todosModelosLavadoras
  );

  const resultadoFiltrados = obterResultadosFinais(resultadoLavadoras, [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);

  res.status(200).json(todosResultadosAutoclaves[1]);
};
