interface CaracteristicasLavadora {
  CaracteristicasGerais: string;
  modelos: ModelosLavadora[];
}

interface ModelosLavadora {
  modelo: string;
  volumeTotalCamaraLitros: number;
  capacidadeDeCargaDeBandejasDeInstrumentos: number;
  capacidadeDeCargaTraqueias: number;
  tempoMedioCicloInstrumentosComCargaMáximaMin: number;
  tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: number;

  // informacoesDoHospital
  producaoUEInstrumentosDia?: number; // 	Estimativa Volume Total Diário por Material segunda tabela
  numeroCirurgiasDia?: number; //     Número de Cirurgias por Dia da segunda tabela
  numeroLeitosUTI?: number; //     Número de Leitos de UTI  da segunda tabela

  // Cálculo do número de ciclos diários para processar Instrumentos
  numerodeBandejasPorUE: number;
  capacidadeDeProcessamentoDeUEEmUmaCarga?: number; //Capacidade de Carga de Bandejas de Instrumentos (número de bandejas) * Numero de Bandejas para cada U.E
  numeroDeCiclosNecessariosDiariamenteParaIntru?: number; //Produção U.E's Instrumentos dia / Capacidade de processamento de U.E em uma carga de Instrumentos
  tempoMedioCicloInstrumentosComCargaMáxima: number; // é o mesmo que  tempoMedioCicloInstrumentosComCargaMáximaMin
  interveloMedioEntreCiclosMIn: number;
  tempoNecessarioParaProcessarADemandaDeInstrumentosMin?: number; //Numero de ciclos necessários diariamente para instrumentos * (Tempo Médio Ciclo Instrumentos com Carga Máxima [minutos] +Intervalo Médio entre ciclos )

  //Cálculo do número de ciclos diários para processar Assis. Ventilatória
  quantidadeDeTraqueiasPorCirurgia: number; //considerando traqueias de 120 cm
  quantidadeDeTraqueiasporDiaCirurgias?: number; // Número de Cirurgias/dia *   Quantidade de Traqueias por Cirurgia * - considerando traqueias de 120 cm       // considerando traqueias de 120 cm
  quantidadeTraqueiasPorLeitoUTIDia: number;
  quantidadeDeTraqueiasPorDiaUTI?: number; //Número de Leitos UTI * Quantidade Traqueias por Leito UTI/Dia**
  quantidadeDeTraqueiasPorDiaTOTAL?: number; //Quantidade de Traqueias por dia (Cirurgias) - considerando traqueias de 120 cm + Quantidade de Traqueias por dia (UTI)
  quantidadedeCiclosNecessariosDiariamenteParaAssistVent?: number; // Quantidade de Traqueias por dia TOTAL / Capacidade de Carga Traquéias (60cm + 120cm)
  tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: number;
  intervaloMedioEntreCiclosMin: number;
  tempoNecessarioParaProcessarADemandaDeAssistVentMin?: number; //Quantidade de ciclos necessários diariamente para Assist. Vent. *(Tempo Médio Ciclo Assistência Ventilatória com Carga Máxima [minutos] + Intervalo Médio entre ciclos )
  demandaDeCiclosPorDia?: number; //Quantidade de ciclos necessários diariamente para Assist. Vent. + Numero de ciclos necessários diariamente para instrumentos
  demandaDeTempoPorDiaMin?: number; //Tempo Necessário para Processar a Demanda de Instrumentos [minutos] + Tempo Necessário para Processar a Demanda de Assist. Vent. [minutos]

  quantidadeDeTermosOfertadasNoProjeto?: number; // É o mesmo valor de Número de Lavadoras Termo
  minutosDisponiveisDiariamenteSomandoTodosOsEquipamentosMin?: number; // 60 * 24 * Quantidade de Termos Ofertadas no Projeto
  percentualDeUtilizaçãoDaCapacidadeMaxDeProcessamentoDasTermos?: number; //  Demanda de Tempo por Dia [minutos] / Minutos Disponíveis Diariamente Somando Todos os Equipamentos
}

const mockModelosLavadora: CaracteristicasLavadora[] = [
  {
    CaracteristicasGerais: "MARCA A",
    modelos: [
      {
        modelo: "A1",
        volumeTotalCamaraLitros: 270,
        capacidadeDeCargaDeBandejasDeInstrumentos: 10,
        capacidadeDeCargaTraqueias: 18,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 60,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 60,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 60.0,
        interveloMedioEntreCiclosMIn: 10.0,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 60,
        intervaloMedioEntreCiclosMin: 10.0,
      },
      {
        modelo: "A2",
        volumeTotalCamaraLitros: 365,
        capacidadeDeCargaDeBandejasDeInstrumentos: 15,
        capacidadeDeCargaTraqueias: 30,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 60,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 60,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 60.0,
        interveloMedioEntreCiclosMIn: 10.0,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 60,
        intervaloMedioEntreCiclosMin: 10.0,
      },
    ],
  },
  {
    CaracteristicasGerais: "MARCA B",
    modelos: [
      {
        modelo: "B1",
        volumeTotalCamaraLitros: 287,
        capacidadeDeCargaDeBandejasDeInstrumentos: 10,
        capacidadeDeCargaTraqueias: 18,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 75,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 70,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 75,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 70,
        intervaloMedioEntreCiclosMin: 10,
      },
      {
        modelo: "B2",
        volumeTotalCamaraLitros: 400,
        capacidadeDeCargaDeBandejasDeInstrumentos: 15,
        capacidadeDeCargaTraqueias: 34,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 46,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 56,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 46,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 56,
        intervaloMedioEntreCiclosMin: 10,
      },
    ],
  },
  {
    CaracteristicasGerais: "MARCA C",
    modelos: [
      {
        modelo: "C1",
        volumeTotalCamaraLitros: 250,
        capacidadeDeCargaDeBandejasDeInstrumentos: 10,
        capacidadeDeCargaTraqueias: 15,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 45,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 60,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 45,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 60,
        intervaloMedioEntreCiclosMin: 10,
      },
      {
        modelo: "C2",
        volumeTotalCamaraLitros: 350,
        capacidadeDeCargaDeBandejasDeInstrumentos: 12,
        capacidadeDeCargaTraqueias: 35,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 45,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 60,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 45,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 60,
        intervaloMedioEntreCiclosMin: 10,
      },
    ],
  },
  {
    CaracteristicasGerais: "MARCA D",
    modelos: [
      {
        modelo: "D1",
        volumeTotalCamaraLitros: 264,
        capacidadeDeCargaDeBandejasDeInstrumentos: 12,
        capacidadeDeCargaTraqueias: 20,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 40,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 40,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 40,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 40,
        intervaloMedioEntreCiclosMin: 10,
      },
      {
        modelo: "D2",
        volumeTotalCamaraLitros: 492,
        capacidadeDeCargaDeBandejasDeInstrumentos: 18,
        capacidadeDeCargaTraqueias: 30,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 45,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 60,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 45,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 60,
        intervaloMedioEntreCiclosMin: 10,
      },
    ],
  },
  {
    CaracteristicasGerais: "MARCA E",
    modelos: [
      {
        modelo: "E1",
        volumeTotalCamaraLitros: 254,
        capacidadeDeCargaDeBandejasDeInstrumentos: 6,
        capacidadeDeCargaTraqueias: 18,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 30,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 45,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 30,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 45,
        intervaloMedioEntreCiclosMin: 10,
      },
      {
        modelo: "E2",
        volumeTotalCamaraLitros: 296,
        capacidadeDeCargaDeBandejasDeInstrumentos: 10,
        capacidadeDeCargaTraqueias: 18,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 25,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 35,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 25,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 35,
        intervaloMedioEntreCiclosMin: 10,
      },
      {
        modelo: "E3",
        volumeTotalCamaraLitros: 359,
        capacidadeDeCargaDeBandejasDeInstrumentos: 15,
        capacidadeDeCargaTraqueias: 35,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 27,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 35,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 27,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 35,
        intervaloMedioEntreCiclosMin: 10,
      },
    ],
  },
  {
    CaracteristicasGerais: "MARCA F",
    modelos: [
      {
        modelo: "F1",
        volumeTotalCamaraLitros: 298,
        capacidadeDeCargaDeBandejasDeInstrumentos: 12,
        capacidadeDeCargaTraqueias: 20,
        tempoMedioCicloInstrumentosComCargaMáximaMin: 45,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin: 45,
        numerodeBandejasPorUE: 2,
        tempoMedioCicloInstrumentosComCargaMáxima: 45,
        interveloMedioEntreCiclosMIn: 10,
        quantidadeDeTraqueiasPorCirurgia: 3,
        quantidadeTraqueiasPorLeitoUTIDia: 3,
        tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin: 45,
        intervaloMedioEntreCiclosMin: 10,
      },
    ],
  },
];
