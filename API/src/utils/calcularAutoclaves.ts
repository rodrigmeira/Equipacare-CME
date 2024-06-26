import {
  calcularAutoclavesInterface,
  resultadoTodosModelosInterface,
} from "../interfaces";
import { formatarPercentual } from "./formatarPercentual";

export const calcularAutoclaves = async ({
  volumeDiarioDeMaterialLitros,
  intervaloDePicoCME,
  modelos,
  numeroAutoclaves,
}: calcularAutoclavesInterface) => {
  const resultadoTodosModelos: resultadoTodosModelosInterface[] = [];

  modelos.forEach((modelo) => {
    const nomeModelo = modelo.name;
    const volumeQuePrecisaraSerProcessadoNoIntervaloDePicoLitros =
      volumeDiarioDeMaterialLitros * 0.9;
    const intervaloDiarioDePicoMinutos =
      intervaloDePicoCME * 60 -
      (modelo.tempoParaTesteDiarioDeBDMin +
        modelo.tempoParaProcedimentoDiarioDeAquecimentoMin);
    const numeroMaximoDeCiclosDuranteIntervaloDePico =
      ((intervaloDiarioDePicoMinutos /
        (modelo.tempoDeCargaEDescargaMin +
          modelo.tempoTotalMedioDoCicloInclindoSecagemMin)) *
        100) /
      100;
    const capacidadeDeProcessamentoNoIntervaloDePico =
      numeroAutoclaves * // Numero de Autoclaves, verificar se será preciso alterar
      modelo.volumeUtilDaCamaraLitros *
      numeroMaximoDeCiclosDuranteIntervaloDePico;
    const percentualDeUltilizacao =
      (volumeQuePrecisaraSerProcessadoNoIntervaloDePicoLitros /
        capacidadeDeProcessamentoNoIntervaloDePico) *
      100;
    const percentualFormatado = formatarPercentual(percentualDeUltilizacao);

    resultadoTodosModelos.push({
      nomeModelo,
      percentualFormatado,
    });
  });
  return resultadoTodosModelos;
};
