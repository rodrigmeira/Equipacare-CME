import { Request, Response } from "express";
import {
  modelosA,
  modelosB,
  modelosC,
  modelosD,
  modelosE,
  modelosF,
} from "../mock";
import { modelosLavadorasA } from "../interfaces/ModeloLavadora";
import {
  calcularDados,
  calcularResultadosAutoclaves,
  obterResultadosFinais,
} from "../utils";
import { calcularLavadoras } from "../utils/calcularLavadoras";

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
  const {
    NumeroSalasCirurgicas,
    NumeroCirurgiasSalaDia,
    IntervaloDePicoCME,
    NumeroLeitosUTI,
    NumeroLeitosInternacao,
  }: {
    NumeroSalasCirurgicas: number;
    NumeroCirurgiasSalaDia: number;
    IntervaloDePicoCME: number;
    NumeroLeitosUTI: number;
    NumeroLeitosInternacao: number;
  } = req.body;

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

  // Calcula o percentual de cada modelo das Autoclaves
  const todosResultadosAutoclaves = await calcularResultadosAutoclaves(
    todosModelosAutoclaves,
    IntervaloDePicoCME,
    volumeDiario.EstimativaDeVolumeTotalDiarioLitros
  );

  // Pega os dois resultados abaixo e mais proximos de 90% das Autoclaves
  const resultadoTodasMarcasAutoclaves = obterResultadosFinais(
    todosResultadosAutoclaves,
    ["A", "B", "C", "D", "E", "F"]
  );

  // ----- CALCULO LAVADORAS TERMO -----

  const obterTodosModelosLavadoras = () => {
    return [...modelosLavadorasA];
  };

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

  res.status(200).json(resultadoFiltrados);
};
