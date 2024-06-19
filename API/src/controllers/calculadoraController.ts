import { modelosA } from "../mock/modelos_A";

import { Request, Response } from "express";
import { FormatarResposta } from "../utils/formatarPercentual";

const calculadoraDadosMock = ({
  NumeroSalasCirurgicas,
  NumeroCirurgiasSalaDia,
  NumeroLeitosUTI,
  NumeroLeitosInternacao,
}: {
  NumeroSalasCirurgicas: number;
  NumeroCirurgiasSalaDia: number;
  IntervaloDePicoCME: number;
  NumeroLeitosUTI: number;
  NumeroLeitosInternacao: number;
}) => {
  const NumeroDeCirurgiasPorDia =
    NumeroSalasCirurgicas * NumeroCirurgiasSalaDia;
  const VolumeTotalDiarioCirurgias = 1.5 * NumeroDeCirurgiasPorDia;
  const VolumeTotalDiarioUTIs = 0.5 * NumeroLeitosUTI;
  const VolumeTotalDiarioInternacao = 0.05 * NumeroLeitosInternacao;
  const EstimativaVolumeTotalDiarioPorMaterial =
    VolumeTotalDiarioInternacao +
    VolumeTotalDiarioUTIs +
    VolumeTotalDiarioCirurgias;
  const EstimativaDeVolumeTotalDiarioUE =
    EstimativaVolumeTotalDiarioPorMaterial * 2;
  const EstimativaDeVolumeTotalDiarioLitros = Math.ceil(
    EstimativaDeVolumeTotalDiarioUE * 54
  );

  return EstimativaDeVolumeTotalDiarioLitros;
};

const calcularModelo = ({
  VolumeDiarioDeMaterialLitros,
  IntervaloDePicoCME,
}: {
  VolumeDiarioDeMaterialLitros: number;
  IntervaloDePicoCME: number;
}) => {
  const resultadoModeloA = modelosA.map((modelo) => {
    const NomeModelo = modelo.modelo;

    const VolumeQuePrecisaraSerProcessadoNoIntervaloDePicoLitros =
      VolumeDiarioDeMaterialLitros * 0.9;

    const IntervaloDiarioDePicoMinutos =
      IntervaloDePicoCME * 60 -
      (modelo.tempoParaTesteDiarioDeBDMin +
        modelo.tempoParaProcedimentoDiarioDeAquecimentoMin);

    const NumeroMaximoDeCiclosDuranteIntervaloDePico =
      ((IntervaloDiarioDePicoMinutos /
        (modelo.tempoDeCargaEDescargaMin +
          modelo.tempoTotalMedioDoCicloInclindoSecagemMin)) *
        100) /
      100;

    const CapacidadeDeProcessamentoNoIntervaloDePico =
      3 * // Numero de Autoclaves, verificar se será preciso alterar
      modelo.volumeUtilDaCamaraLitros *
      NumeroMaximoDeCiclosDuranteIntervaloDePico;

    const PercentualDeUltilizacao =
      (VolumeQuePrecisaraSerProcessadoNoIntervaloDePicoLitros /
        CapacidadeDeProcessamentoNoIntervaloDePico) *
      100;

    const PercentualFormatado = FormatarResposta(PercentualDeUltilizacao);

    return {
      NomeModelo,
      PercentualFormatado,
    };
  });

  return resultadoModeloA;
};

export const calcularDados = (req: Request, res: Response) => {
  const inputsCalculadora = req.body;

  const resultado = calculadoraDadosMock(inputsCalculadora);

  const inputsCalcularModelos = {
    VolumeDiarioDeMaterialLitros: resultado,
    IntervaloDePicoCME: inputsCalculadora.IntervaloDePicoCME,
  };

  const retultadoModelos = calcularModelo(inputsCalcularModelos);

  res.status(200).json(retultadoModelos);
};
