export const calculadoraDados = ({
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
