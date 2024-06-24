import { ModelosLavadora } from "../interfaces/ModeloLavadora";
import { formatarPercentual } from "./formatarPercentual";
import { obterResultadosFinais } from "./obterResultadosFinais";

export const calcularLavadoras = (
  EstimativaVolumeTotalDiarioMaterial: number,
  cirurgiasPorDia: number,
  NumeroleitosUTI: number,
  quantidadeDeTermos: number,
  modelos: ModelosLavadora[]
) => {
  const resultadoLavadoras = modelos.map((modelo) => {
    const NomeModelo = modelo.modelo;

    const CapacidadeProcessamentoUEInstrumentos =
      modelo.capacidadeDeCargaDeBandejasDeInstrumentos /
      modelo.numerodeBandejasPorUE;

    const NumeroCiclosNecessariosDiariamenteParaIntrumentos =
      EstimativaVolumeTotalDiarioMaterial /
      CapacidadeProcessamentoUEInstrumentos;

    const TempoNecessarioParaProcessarADemandaDeInstrumentosMin =
      NumeroCiclosNecessariosDiariamenteParaIntrumentos *
      (modelo.tempoMedioCicloInstrumentosComCargaMáxima +
        modelo.interveloMedioEntreCiclosMIn);

    const QuantidadeTraqueiasPorDiaCirurgia =
      cirurgiasPorDia * modelo.quantidadeDeTraqueiasPorCirurgia;

    const QuantidadeTraqueiasPorDiaUTI =
      NumeroleitosUTI * modelo.quantidadeTraqueiasPorLeitoUTIDia;

    const QuantidadeTraqueiasPorDiaTOTAL =
      QuantidadeTraqueiasPorDiaCirurgia + QuantidadeTraqueiasPorDiaUTI;

    const QuantidadeCiclosNecessariosDiariamenteParaAssistVent =
      QuantidadeTraqueiasPorDiaTOTAL / modelo.capacidadeDeCargaTraqueias;
    const TempoMedioCicloAssistenciaVentilatoriaComCargaMaxima =
      modelo.tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin;

    const TempoNecessarioParaProcessarDemandaDeAssistVent =
      QuantidadeCiclosNecessariosDiariamenteParaAssistVent *
      (TempoMedioCicloAssistenciaVentilatoriaComCargaMaxima +
        modelo.interveloMedioEntreCiclosMIn);

    const DemandaTempoDia =
      TempoNecessarioParaProcessarADemandaDeInstrumentosMin +
      TempoNecessarioParaProcessarDemandaDeAssistVent;

    // const QuantidadeDeTermos = quantidadeDeTermos;

    const MinutosDisponiveisDiariamenteSomandoEquipamentos =
      60 * 24 * quantidadeDeTermos;

    const PercentualUtilizacaoCapacidadeMaxima =
      (DemandaTempoDia / MinutosDisponiveisDiariamenteSomandoEquipamentos) *
      100;

    const PercentualFormatado = formatarPercentual(
      PercentualUtilizacaoCapacidadeMaxima
    );

    return {
      NomeModelo,
      PercentualFormatado,
    };
  });

  const resultadosAchatados = resultadoLavadoras.flat().filter(Boolean);
  const resultadoFiltrados = obterResultadosFinais(resultadosAchatados, [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);

  const resultadoFinal = resultadoFiltrados.flat();

  return { quantidadeDeTermos, resultadoFinal };
};
