export interface modeloLavadora {
  name: string;
  marcaId: number;
  volumeTotalCamaraLitros: number;
  capacidadeDeCargaDeBandejasDeInstrumentos: number;
  capacidadeDeCargaTraqueias: number;
  tempoMedioCicloInstrumentosComCargaMaximaMin: number;
  tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: number;

  producaoUEInstrumentosDia?: number;
  numeroCirurgiasDia?: number;
  numeroLeitosUTI?: number;

  numerodeBandejasPorUE: number;
  capacidadeDeProcessamentoDeUEEmUmaCarga?: number;
  numeroDeCiclosNecessariosDiariamenteParaIntru?: number;
  tempoMedioCicloInstrumentosComCargaMaxima: number;
  interveloMedioEntreCiclosMIn: number;
  tempoNecessarioParaProcessarADemandaDeInstrumentosMin?: number;

  quantidadeDeTraqueiasPorCirurgia: number;
  quantidadeDeTraqueiasporDiaCirurgias?: number;
  quantidadeTraqueiasPorLeitoUTIDia: number;
  quantidadeDeTraqueiasPorDiaUTI?: number;
  quantidadeDeTraqueiasPorDiaTOTAL?: number;
  quantidadedeCiclosNecessariosDiariamenteParaAssistVent?: number;
  tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: number;
  intervaloMedioEntreCiclosMin: number;
  tempoNecessarioParaProcessarADemandaDeAssistVentMin?: number;
  demandaDeCiclosPorDia?: number;
  demandaDeTempoPorDiaMin?: number;

  quantidadeDeTermosOfertadasNoProjeto?: number;
  minutosDisponiveisDiariamenteSomandoTodosOsEquipamentosMin?: number;
  percentualDeUtilizaçãoDaCapacidadeMaxDeProcessamentoDasTermos?: number;
}
