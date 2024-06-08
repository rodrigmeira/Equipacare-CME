// interface Caracteristicas {
//     CaracteristicasGerais: string;
//     modelos: Modelo[];
// }

// interface Modelo{
//     modelo: string;
//     volumeTotalDaCamara: number;
//     volumeUtilDaCamara: number;
//     tempoTotalMedioDoCiclo: number;
//     tempoDeCargaEDescarga: number;
//     tempoDoCicloConsiderandoCargaEDescarga: number;
//     tempoParaTesteDiarioDeBD: number;
//     tempoParaProcedimentoDiarioDeAquecimento: number;
//     tempoDisponivelDiario: number;
//     producaoDoHospitalVolumeDiario: number;
//     volumeProcessadoNoIntervaloDePico: number;
//     intervaloDiarioDePico: number;
//     numeroMaximoDeCiclosPorDia: number;
//     numeroMaximoDeCiclosDuranteIntervaloDePico: number;
//     // volumeTotalDaCamara: number; esta duplicado no excel
//     //volumeTotalDaCamara: number;
//     percentualAproveitamentoCamara: number;
//     numeroDeAutoclaves: number;
//     numeroDeAutoclavesEmManutencao: number;
//     capacidadeProcessamentoIntervaloDePico: number;
//     horasNecessariasParaAtenderVolumeTotal: number;
//     percentualUtilizacaoCapacidadeNoPico: number;
// }

// const mock_AutoClaves_a_vapor: Caracteristicas[]=[
//     {
//         CaracteristicasGerais: "MARCA A",
//         modelos: [
//             {
//                 modelo: "A1",
//                 volumeTotalDaCamara: 102,
//                 volumeUtilDaCamara: 81,
//                 tempoTotalMedioDoCiclo: 50.0,
//                 tempoDeCargaEDescarga: 10.0,
//                 tempoDoCicloConsiderandoCargaEDescarga: 60.0,
//                 tempoParaTesteDiarioDeBD: 30.0,
//                 tempoParaProcedimentoDiarioDeAquecimento: 20.0,
//                 tempoDisponivelDiario: 1390.0,
//                 producaoDoHospitalVolumeDiario: 14089,
//                 volumeProcessadoNoIntervaloDePico: 12680,
//                 intervaloDiarioDePico: 670.0,
//                 numeroMaximoDeCiclosPorDia: 23.17,
//                 numeroMaximoDeCiclosDuranteIntervaloDePico: 11.17,
//                 percentualAproveitamentoCamara: 79,
//                 numeroDeAutoclaves: 3,
//                 numeroDeAutoclavesEmManutencao: 2,
//                 capacidadeProcessamentoIntervaloDePico: 2714,
//                 horasNecessariasParaAtenderVolumeTotal: 87,
//                 percentualUtilizacaoCapacidadeNoPico: 467.28
//             },
//             {
//                 modelo: "A2",
//                 volumeTotalDaCamara: 145,
//                 volumeUtilDaCamara: 96,
//                 tempoTotalMedioDoCiclo: 53.0,
//                 tempoDeCargaEDescarga: 10.0,
//                 tempoDoCicloConsiderandoCargaEDescarga: 63.0,
//                 tempoParaTesteDiarioDeBD: 30.0,
//                 tempoParaProcedimentoDiarioDeAquecimento: 20.0,
//                 tempoDisponivelDiario: 1390.0,
//                 producaoDoHospitalVolumeDiario: 14089,
//                 volumeProcessadoNoIntervaloDePico: 12680,
//                 intervaloDiarioDePico: 670.0,
//                 numeroMaximoDeCiclosPorDia: 22.06,
//                 numeroMaximoDeCiclosDuranteIntervaloDePico: 10.63,
//                 percentualAproveitamentoCamara: 66,
//                 numeroDeAutoclaves: 3,
//                 numeroDeAutoclavesEmManutencao: 2,
//                 capacidadeProcessamentoIntervaloDePico: 3063,
//                 horasNecessariasParaAtenderVolumeTotal: 77,
//                 percentualUtilizacaoCapacidadeNoPico: 413.98
//             },
//         ]
//     },
// ]

interface Caracteristicas {
  CaracteristicasGerais: string;
  modelos: Modelo[];
}

interface Modelo {
  modelo: string;
  volumeTotalDaCamara: number;
  volumeUtilDaCamara: number;
  tempoTotalMedioDoCiclo: string;
  tempoDeCargaEDescarga: string;
  tempoDoCicloConsiderandoCargaEDescarga: string;
  tempoParaTesteDiarioDeBD: string;
  tempoParaProcedimentoDiarioDeAquecimento: string;
  tempoDisponivelDiario: number;
  producaoDoHospitalVolumeDiario: number;
  volumeProcessadoNoIntervaloDePico: number;
  intervaloDiarioDePico: number;
  numeroMaximoDeCiclosPorDia: number;
  numeroMaximoDeCiclosDuranteIntervaloDePico: number;
  percentualAproveitamentoCamara: string;
  numeroDeAutoclaves: number;
  numeroDeAutoclavesEmManutencao: number;
  capacidadeProcessamentoIntervaloDePico: number;
  horasNecessariasParaAtenderVolumeTotal: string;
  percentualUtilizacaoCapacidadeNoPico: string;
}

const mock_AutoClaves_a_vapor: Caracteristicas[] = [
  {
    CaracteristicasGerais: "MARCA A",
    modelos: [
      {
        modelo: "A1",
        volumeTotalDaCamara: 102,
        volumeUtilDaCamara: 81,
        tempoTotalMedioDoCiclo: "50,0 minutos",
        tempoDeCargaEDescarga: "10,0 minutos",
        tempoDoCicloConsiderandoCargaEDescarga: "60,0 minutos",
        tempoParaTesteDiarioDeBD: "30,0 minutos",
        tempoParaProcedimentoDiarioDeAquecimento: "20,0 minutos",
        tempoDisponivelDiario: 1390,
        producaoDoHospitalVolumeDiario: 14089,
        volumeProcessadoNoIntervaloDePico: 12680,
        intervaloDiarioDePico: 670,
        numeroMaximoDeCiclosPorDia: 23.17,
        numeroMaximoDeCiclosDuranteIntervaloDePico: 11.17,
        percentualAproveitamentoCamara: "79%",
        numeroDeAutoclaves: 3,
        numeroDeAutoclavesEmManutencao: 2,
        capacidadeProcessamentoIntervaloDePico: 2714,
        horasNecessariasParaAtenderVolumeTotal: "87 horas",
        percentualUtilizacaoCapacidadeNoPico: "467,28%",
      },
      {
        modelo: "A2",
        volumeTotalDaCamara: 145,
        volumeUtilDaCamara: 96,
        tempoTotalMedioDoCiclo: "53,0 minutos",
        tempoDeCargaEDescarga: "10,0 minutos",
        tempoDoCicloConsiderandoCargaEDescarga: "63,0 minutos",
        tempoParaTesteDiarioDeBD: "30,0 minutos",
        tempoParaProcedimentoDiarioDeAquecimento: "20,0 minutos",
        tempoDisponivelDiario: 1390,
        producaoDoHospitalVolumeDiario: 14089,
        volumeProcessadoNoIntervaloDePico: 12680,
        intervaloDiarioDePico: 670,
        numeroMaximoDeCiclosPorDia: 22.06,
        numeroMaximoDeCiclosDuranteIntervaloDePico: 10.63,
        percentualAproveitamentoCamara: "66%",
        numeroDeAutoclaves: 3,
        numeroDeAutoclavesEmManutencao: 2,
        capacidadeProcessamentoIntervaloDePico: 3063,
        horasNecessariasParaAtenderVolumeTotal: "77 horas",
        percentualUtilizacaoCapacidadeNoPico: "413,98%",
      },
    ],
  },
];
