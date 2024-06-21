export interface Modelo {
  modelo: string;
  volumeTotalDaCamaraLitros: number;
  volumeUtilDaCamaraLitros: number;
  tempoTotalMedioDoCicloInclindoSecagemMin: number;
  tempoDeCargaEDescargaMin: number;
  tempoDoCicloConsiderandoCargaEDescargaMin?: number;
  tempoParaTesteDiarioDeBDMin: number;
  tempoParaProcedimentoDiarioDeAquecimentoMin: number;
  tempoDisponivelDiarioMin?: number;
  producaoDoHospitalVolumeDiarioLitros?: number;
  volumeProcessadoNoIntervaloDePicoLitros?: number;
  intervaloDiarioDePicoMin?: number;
  numeroMaximoDeCiclosPorDia?: number;
  numeroMaximoDeCiclosDuranteIntervaloDePico?: number;
  percentualAproveitamentoCamara?: number;
  numeroDeAutoclaves?: number;
  numeroDeAutoclavesEmManutencao?: number;
  capacidadeProcessamentoIntervaloDePico?: number;

  horasNecessariasParaAtenderVolumeTotalCasoUmaAltoClaveEstejaEmManutencao?: number;
  percentualUtilizacaoCapacidadeNoPico?: number;
}
