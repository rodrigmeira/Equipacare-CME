export interface modeloAutoclave {
  name: string;
  marcaId: number;
  volumeTotalDaCamaraLitros: number;
  volumeUtilDaCamaraLitros: number;
  tempoTotalMedioDoCicloInclindoSecagemMin: number;
  tempoDeCargaEDescargaMin: number;
  tempoDoCicloConsiderandoCargaEDescargaMin?: number;
  tempoParaTesteDiarioDeBDMin: number;
  tempoParaProcedimentoDiarioDeAquecimentoMin: number;
  tempoDisponivelDiarioMin?: number;
}
