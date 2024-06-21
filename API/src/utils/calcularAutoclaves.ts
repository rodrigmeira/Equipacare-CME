import {
  calcularAutoclavesInterface,
  resultadoTodosModelosInterface,
} from "../interfaces";
import { formatarPercentual } from "./formatarPercentual";

export const calcularAutoclaves = async ({
  VolumeDiarioDeMaterialLitros,
  IntervaloDePicoCME,
  modelos,
}: calcularAutoclavesInterface) => {
  const resultadoTodosModelos: resultadoTodosModelosInterface[] = [];

  modelos.forEach((modelo) => {
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
    const PercentualFormatado = formatarPercentual(PercentualDeUltilizacao);

    resultadoTodosModelos.push({
      NomeModelo,
      PercentualFormatado,
    });
  });
  return resultadoTodosModelos;
};
