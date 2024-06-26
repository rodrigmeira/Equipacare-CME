import { modeloLavadora } from "../interfaces";
import { formatarPercentual } from "./formatarPercentual";
import { obterResultadosFinais } from "./obterResultadosFinais";

export const calcularLavadoras = (
  estimativaVolumeTotalDiarioMaterial: number,
  cirurgiasPorDia: number,
  numeroleitosUTI: number,
  quantidadeDeTermos: number,
  modelos: modeloLavadora[]
) => {
  const resultadoLavadoras = modelos.map((modelo) => {
    const nomeModelo = modelo.name;

    const capacidadeProcessamentoUEInstrumentos =
      modelo.capacidadeDeCargaDeBandejasDeInstrumentos /
      modelo.numerodeBandejasPorUE;

    const numeroCiclosNecessariosDiariamenteParaIntrumentos =
      estimativaVolumeTotalDiarioMaterial /
      capacidadeProcessamentoUEInstrumentos;

    const tempoNecessarioParaProcessarADemandaDeInstrumentosMin =
      numeroCiclosNecessariosDiariamenteParaIntrumentos *
      (modelo.tempoMedioCicloInstrumentosComCargaMaxima +
        modelo.interveloMedioEntreCiclosMIn);

    const quantidadeTraqueiasPorDiaCirurgia =
      cirurgiasPorDia * modelo.quantidadeDeTraqueiasPorCirurgia;

    const quantidadeTraqueiasPorDiaUTI =
      numeroleitosUTI * modelo.quantidadeTraqueiasPorLeitoUTIDia;

    const quantidadeTraqueiasPorDiaTOTAL =
      quantidadeTraqueiasPorDiaCirurgia + quantidadeTraqueiasPorDiaUTI;

    const quantidadeCiclosNecessariosDiariamenteParaAssistVent =
      quantidadeTraqueiasPorDiaTOTAL / modelo.capacidadeDeCargaTraqueias;
    const tempoMedioCicloAssistenciaVentilatoriaComCargaMaxima =
      modelo.tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin;

    const tempoNecessarioParaProcessarDemandaDeAssistVent =
      quantidadeCiclosNecessariosDiariamenteParaAssistVent *
      (tempoMedioCicloAssistenciaVentilatoriaComCargaMaxima +
        modelo.interveloMedioEntreCiclosMIn);

    const demandaTempoDia =
      tempoNecessarioParaProcessarADemandaDeInstrumentosMin +
      tempoNecessarioParaProcessarDemandaDeAssistVent;

    // const QuantidadeDeTermos = quantidadeDeTermos;

    const minutosDisponiveisDiariamenteSomandoEquipamentos =
      60 * 24 * quantidadeDeTermos;

    const percentualUtilizacaoCapacidadeMaxima =
      (demandaTempoDia / minutosDisponiveisDiariamenteSomandoEquipamentos) *
      100;

    const percentualFormatado = formatarPercentual(
      percentualUtilizacaoCapacidadeMaxima
    );

    return {
      nomeModelo,
      percentualFormatado,
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
