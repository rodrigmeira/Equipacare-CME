export interface modeloAutoclaveCopy {
  id?: number;
  modelo?: string;
  marcaId?: number;
  volumeTotalDaCamaraLitros?: number;
  volumeUtilDaCamaraLitros?: number;
  tempoTotalMedioDoCicloInclindoSecagemMin?: number;
  tempoDeCargaEDescargaMin?: number;
  tempoDoCicloConsiderandoCargaEDescargaMin?: number;
  tempoParaTesteDiarioDeBDMin?: number;
  tempoParaProcedimentoDiarioDeAquecimentoMin?: number;
  tempoDisponivelDiarioMin?: number;
}
