import { formatarPercentual } from "./formatarPercentual";

export const calcularModelos = ({
  VolumeDiarioDeMaterialLitros,
  IntervaloDePicoCME,
  modelos,
}: {
  VolumeDiarioDeMaterialLitros: number;
  IntervaloDePicoCME: number;
  modelos: any[];
}) => {
  const resultadoModelos = modelos.map((modelo) => {
    const NomeModelo = modelo.modelo;

    const VolumeQuePrecisaraSerProcessadoNoIntervaloDePicoLitros = VolumeDiarioDeMaterialLitros * 0.9;

    const IntervaloDiarioDePicoMinutos = IntervaloDePicoCME * 60 - (modelo.tempoParaTesteDiarioDeBDMin + modelo.tempoParaProcedimentoDiarioDeAquecimentoMin);

    const NumeroMaximoDeCiclosDuranteIntervaloDePico = ((IntervaloDiarioDePicoMinutos / (modelo.tempoDeCargaEDescargaMin + modelo.tempoTotalMedioDoCicloInclindoSecagemMin)) * 100) / 100;
    
    // Numero de Autoclaves, verificar se será preciso alterar
    const CapacidadeDeProcessamentoNoIntervaloDePico = 3 * modelo.volumeUtilDaCamaraLitros * NumeroMaximoDeCiclosDuranteIntervaloDePico;

    const PercentualDeUltilizacao = (VolumeQuePrecisaraSerProcessadoNoIntervaloDePicoLitros / CapacidadeDeProcessamentoNoIntervaloDePico) * 100;

    const PercentualFormatado = formatarPercentual(PercentualDeUltilizacao);

    return {
      NomeModelo,
      PercentualFormatado, 
    };
  });

  return resultadoModelos;
};
