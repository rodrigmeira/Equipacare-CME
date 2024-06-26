// import { PrismaClient } from "@prisma/client";
// import * as mock from "../../src/mock";
// import { marcas } from "../../src/mock/marcas";

// const prisma = new PrismaClient();

// async function main() {
//   console.log("DB seed");
//   await seedLavadoras();
// }

// async function seedMarcas() {
//   for (let marca of marcas) {
//     const record = await prisma.marcas.create({
//       data: {
//         name: marca.name,
//       },
//     });

//     console.log("*** created marcas", record.id, record.name);
//   }
// }

// async function seedAutoclaves() {
//   const getAllModels = async () => {
//     return [
//       ...mock.modelosA,
//       ...mock.modelosB,
//       ...mock.modelosC,
//       ...mock.modelosD,
//       ...mock.modelosE,
//       ...mock.modelosF,
//     ];
//   };

//   const allModels = await getAllModels();

//   for (let model of allModels) {
//     const record = await prisma.autoclaves.create({
//       data: {
//         name: model.modelo,
//         marcaId: model.marcaId,
//         volumeTotalDaCamaraLitros: model.volumeTotalDaCamaraLitros,
//         volumeUtilDaCamaraLitros: model.volumeUtilDaCamaraLitros,
//         tempoTotalMedioDoCicloInclindoSecagemMin:
//           model.tempoTotalMedioDoCicloInclindoSecagemMin,
//         tempoDeCargaEDescargaMin: model.tempoDeCargaEDescargaMin,
//         tempoParaTesteDiarioDeBDMin: model.tempoParaTesteDiarioDeBDMin,
//         tempoParaProcedimentoDiarioDeAquecimentoMin:
//           model.tempoParaProcedimentoDiarioDeAquecimentoMin,
//       },
//     });

//     console.log("*** created autoclaves", record.id, record.name);
//   }
// }

// async function seedLavadoras() {
//   const getAllLavadoras = async () => {
//     return [
//       ...mock.modelosLavadorasA,
//       ...mock.modelosLavadorasB,
//       ...mock.modelosLavadorasC,
//       ...mock.modelosLavadorasD,
//       ...mock.modelosLavadorasE,
//       ...mock.modelosLavadorasF,
//     ];
//   };

//   const allLavadoras = await getAllLavadoras();

//   for (let model of allLavadoras) {
//     const record = await prisma.lavadorasTermo.create({
//       data: {
//         name: model.modelo,
//         marcaId: model.marcaId,
//         volumeTotalCamaraLitros: model.volumeTotalCamaraLitros,
//         capacidadeDeCargaDeBandejasDeInstrumentos:
//           model.capacidadeDeCargaDeBandejasDeInstrumentos,
//         capacidadeDeCargaTraqueias: model.capacidadeDeCargaTraqueias,
//         tempoMedioCicloInstrumentosComCargaMaximaMin:
//           model.tempoMedioCicloInstrumentosComCargaMaximaMin,
//         tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin:
//           model.tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin,
//         numerodeBandejasPorUE: model.numerodeBandejasPorUE,
//         tempoMedioCicloInstrumentosComCargaMaxima:
//           model.tempoMedioCicloInstrumentosComCargaMaxima,
//         interveloMedioEntreCiclosMIn: model.interveloMedioEntreCiclosMIn,
//         quantidadeDeTraqueiasPorCirurgia:
//           model.quantidadeDeTraqueiasPorCirurgia,
//         quantidadeTraqueiasPorLeitoUTIDia:
//           model.quantidadeTraqueiasPorLeitoUTIDia,
//         tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin:
//           model.tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin,
//         intervaloMedioEntreCiclosMin: model.intervaloMedioEntreCiclosMin,
//       },
//     });

//     console.log("*** created lavadoras", record.id, record.name);
//   }
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.log(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
